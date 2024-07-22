const jwt = require('jsonwebtoken');
const User = require('../models/User');
const AuthToken = require('../models/AuthToken');  // Ensure this import

// Function to generate a JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
};

// User authentication and token generation
// exports.loginUser = async (req, res) => {
//     const { username, password, role } = req.body;

//     try {
//         let user = await User.findOne({ username });

//         if (user) {
//             // User exists, compare password and role
//             const isMatch = await user.comparePassword(password, user.password);
//             if (isMatch && user.role === role) {
//                 const auth_token = generateToken(user._id);

//                 // Save token to database with expiration
//                 const tokenDoc = new AuthToken({
//                   userid: user._id,
//                     token: auth_token,
//                     expiresAt: new Date(Date.now() + 3600 * 1000), // Assuming token expires in 1 hour
//                 });

//                 await tokenDoc.save();

//                 return res.json({ 
//                     auth_token,
//                     username: user.username,
//                     success: true,
//                     role: user.role,
//                     password: user.password // hashed password
//                 });
//             } else {
//                 return res.status(401).json({ message: 'Invalid credentials' });
//             }
//         } else {
//             // User does not exist, create a new user
//             const hashedPassword = await User.genrateHash(password);
//             const newUser = new User({
//                 username,
//                 password: hashedPassword,
//                 role
//             });

//             await newUser.save();

//             const auth_token = generateToken(newUser._id);

//             // Save token to database with expiration
//             const tokenDoc = new AuthToken({
//                 userid: newUser._id,
//                 token: auth_token,
//                 expiresAt: new Date(Date.now() + 3600 * 1000), // Assuming token expires in 1 hour
//             });

//             await tokenDoc.save();

//             return res.json({ 
//                 auth_token,
//                 username: newUser.username,
//                 role: newUser.role,
//                 success: true,
//                 password: newUser.password // hashed password
//             });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Failed to authenticate or create user' });
//     }
// };


// User authentication and token generation
exports.loginUser = async (req, res) => {
  const { username, password, role } = req.body;

  try {
      let user = await User.findOne({ username });

      if (user) {
          // User exists, compare password and role
          const isMatch = await user.comparePassword(password, user.password);
          if (isMatch && user.role === role) {
              // Check if there's an existing token for the user
              let authToken = await AuthToken.findOne({ userid: user._id }); 

              if (authToken) {
                  // Update existing token and expiration
                  authToken.token = generateToken(user._id);
                  authToken.expiresAt = new Date(Date.now() + 3600 * 1000); // Update expiration to 1 hour from now
              } else {
                  // No existing token, create a new one
                  authToken = new AuthToken({
                      userid: user._id,
                      token: generateToken(user._id),
                      expiresAt: new Date(Date.now() + 3600 * 1000), // Assuming token expires in 1 hour
                  });
              }

              await authToken.save();

              return res.json({ 
                  auth_token: authToken.token,
                  username: user.username,
                  success: true,
                  role: user.role,
                  password: user.password // hashed password (consider removing this in production)
              });
          } else {
              return res.status(401).json({ message: 'Invalid credentials' });
          }
      } else {
          // User does not exist, create a new user
          const hashedPassword = await User.genrateHash(password);
          const newUser = new User({
              username,
              password: hashedPassword,
              role
          });

          await newUser.save();

          const auth_token = generateToken(newUser._id);

          // Save token to database with expiration
          const tokenDoc = new AuthToken({
              userid: newUser._id,
              token: auth_token,
              expiresAt: new Date(Date.now() + 3600 * 1000), // Assuming token expires in 1 hour
          });

          await tokenDoc.save();

          return res.json({ 
              auth_token,
              username: newUser.username,
              role: newUser.role,
              success: true,
              password: newUser.password // hashed password (consider removing this in production)
          });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to authenticate or create user' });
  }
};
