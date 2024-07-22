const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const helmet = require('helmet');
const mongoose = require('mongoose');
const path = require('path'); // Add path module for static file serving

// App initialization
const app = express();
dotenv.config();

const db = process.env.MONGO_URI;
const port = process.env.PORT || 8080;
const routes = require('./src/routes');

// CORS Configuration
const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3001'], // Spe
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors({
  origin:"*",
}));

// Middleware setup
app.use(require('morgan')('dev'));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static assets
app.use("/assets", express.static(path.join(__dirname, "src/public")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Handle CORS and other errors
app.use((error, req, res, next) => {
  const message = error.message;
  const statusCode = error.statusCode || 500;
  res.status(statusCode).json({
    message: message,
  });
});

// MongoDB connection
mongoose.set('strictQuery', false);
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.error("Database connection error:", err.message));

// API routes
app.use("/api", routes);

// Error handling middleware
app.use((err, req, res, next) => {
  const code = err.status || 500;
  const errorResponse = {
    success: false,
    data: {},
    message: err.message || "Something went wrong",
    status: code,
  };
  console.error(errorResponse);
  return res.status(code).json(errorResponse);
});

// Start server
const server = app.listen(port, () => {
  console.log(`Server running in "${process.env.NODE_ENV}" mode on port "${port}"`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.error("Error: ", err.message);
  server.close(() => process.exit(1));
});