// middleware/auth.js
const jwt = require('jsonwebtoken');
const AuthToken = require("../models/AuthToken");

const verifyToken =async (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // Extract the token from the header
  const token = authHeader.split(' ')[1].replace(/`/g, '').trim();

  console.log(`Extracted token: ${token}`); 
  const verifyToken = await AuthToken.findOne({token:token});
  console.log("Abc====",verifyToken);

   const currentTimestamp = Date.now();
   const expiresAt = new Date(verifyToken.expiresAt).getTime();
console.log("bc====",currentTimestamp ,"nnnn", expiresAt)
   if (currentTimestamp >= expiresAt) {
    //  return res.status(401).json({ message: 'Token has expired' });
    console.log("Token has expired");
   }else{
     return next();
   }
 
   
};

module.exports = verifyToken;
