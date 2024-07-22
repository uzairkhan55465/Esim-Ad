const jwt = require('jsonwebtoken');
const AuthToken = require('../models/AuthToken');

exports.checkToken = async (req, res) => {
    return res.status(200).json({ success: true , message:"Token is valid" });
};