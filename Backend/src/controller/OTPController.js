const express = require('express');
const bodyParser = require('body-parser');
const otpGenerator = require('otp-generator');
const nodemailer = require('nodemailer');
const NodeCache = require('node-cache');
const schedule = require('node-schedule');
const app = express();

const otpCache = new NodeCache({ stdTTL: 1800 });


exports.OTPGenerate = async (req, res, next) => {
    try {
        const chars = '0123456789';
        let generatedOTP = '';
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            generatedOTP += chars[randomIndex];
        }
        otpCache.set(req.email, generatedOTP);
        return `${generatedOTP}`;
    } catch (error) {
        // Handle errors
        console.error('Error generating OTP:', error);
        return res.status(500).json({
            success: false,
            data: {},
            message: 'Internal Server Error',
            status: 500,
        });
    }
};


exports.VerifyOtp = async (req, res, next) => {
    try {
        // Generate OTP
        // const generatedOTP = otpGenerator.generate(6);
        // console.log("get====", req);
        let storedOTP = otpCache.get(req);
        console.log(`OTP Found: ${storedOTP}`);
        otpCache.del(req);
        return `${storedOTP}`;
    } catch (error) {
        // Handle errors
        console.error('Error Finding Stored OTP:', error);
        return res.status(500).json({
            success: false,
            data: {},
            message: 'Internal Server Error',
            status: 500,
        });
    }
};