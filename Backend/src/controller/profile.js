const express = require('express');
const bodyParser = require('body-parser');
const schedule = require('node-schedule');
const app = express();
const { nanoid } = require('nanoid');
const Profile = require('../models/profile');

const createProduct = async (req, res) => {
    console.log("req.body", req.body);
    
    // Initialize newProduct before using it
    const newProfile = new Profile(req.body);
    newProduct.id = nanoid(6);
try {
  const savedProduct = await newProduct.save();
  res.status(201).json(savedProduct);
} catch (err) {
  res.status(400).json({ message: err.message });
}

  };
  

  
  module.exports = {
    createProduct

  };
