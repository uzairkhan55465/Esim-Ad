const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const schedule = require('node-schedule');
const app = express();
const { nanoid } = require('nanoid');
const CompanyInfo = require('../models/companyInfo');

const createcompanyInfo = async (req, res) => {
    console.log("req.body", req.body);
    try {
        // Hash the password before saving the customer
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;
        req.body.companyCode = Math.floor(Math.random() * 10**13).toString().padStart(13, '0');
        // Initialize new customer
        const companyInfo = new CompanyInfo(req.body);
        // Save the customer to the database
        const savecompanyInfo = await companyInfo.save();
        res.status(201).json(savecompanyInfo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getAll = async (req, res) => {
  try {
      const getcompanyInfo = await CompanyInfo.find();
      res.status(201).json(getcompanyInfo);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

const deleteAll = async (req, res) => {
  try {
      await CompanyInfo.deleteMany({});
      res.status(200).json({ message: "All company info deleted successfully" });
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};


const deleteById = async (req, res) => {
  const id = req.query.id;
  try {
      const deletedInfo = await CompanyInfo.findByIdAndDelete({_id:id});
      if (!deletedInfo) {
          return res.status(404).json({ message: "Company info not found" });
      }
      res.status(200).json({ message: "Company info deleted successfully" });
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

const getById = async (req, res) => {
  const id = req.query.id;
  try {
      const info = await CompanyInfo.findById({_id:id});
      if (!info) {
          return res.status(404).json({ message: "Company info not found" });
      }
      res.status(200).json(info);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

const updateById = async (req, res) => {
  const id = req.query.id;
  try {
      const updatedInfo = await CompanyInfo.findByIdAndUpdate({_id:id}, req.body, { new: true });
      if (!updatedInfo) {
          return res.status(404).json({ message: "Company info not found" });
      }
      res.status(200).json(updatedInfo);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};




  module.exports = {
    createcompanyInfo,
    getAll,
    deleteAll,
    deleteById,
    getById,
    updateById

  };
