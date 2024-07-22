const express = require('express');
const bodyParser = require('body-parser');
const schedule = require('node-schedule');
const app = express();
const { nanoid } = require('nanoid');
const Productcatalog = require('../models/productcatalog');

const createProduct = async (req, res) => {
    console.log("req.body", req.body);
    
    // Initialize newProduct before using it
    const newProduct = new Productcatalog(req.body);
    newProduct.id = nanoid(6);
try {
  const savedProduct = await newProduct.save();
  res.status(201).json(savedProduct);
} catch (err) {
  res.status(400).json({ message: err.message });
}

  };
  
  const getAllProducts = async (req, res) => {
    try {
      const products = await Productcatalog.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  const getProductById = async (req, res) => {
    try {
      const product = await Productcatalog.findOne({ id: req.query.id });
      if (!product) return res.status(404).json({ message: 'Product not found' });
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  const updateProductById = async (req, res) => {
    try {
      const updatedProduct = await Productcatalog.findOneAndUpdate({ id: req.query.id }, req.body, { new: true });
      if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  const deleteAllProducts = async (req, res) => {
    try {
      await Productcatalog.deleteMany();
      res.status(204).json({ message: 'All products deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const totalProductSold =  async (req, res) => {
    try {
      const products = await Productcatalog.find();
      console.log("abc====",products)
      let subscriptionSum = 0;
    products.forEach(product => {
      console.log("subscription:", product.subscription);
      subscriptionSum += product.subscription;
    });
console.log("ab-===",subscriptionSum)
      res.status(200).json({ totalProductSold: subscriptionSum });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  const deleteProductById = async (req, res) => {
    try {
      const deletedProduct = await Productcatalog.findOneAndDelete({ id: req.query.id });
      if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
      res.status(204).json({ message: 'Product deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteAllProducts,
    deleteProductById,
    totalProductSold
  };
