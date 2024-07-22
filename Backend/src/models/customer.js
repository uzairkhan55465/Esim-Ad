const mongoose = require('mongoose');
const crypto = require("crypto");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    companyType: { type: String},
    companyCode: { type: String},
    companyName: { type: String, required: true },
    officerName: { type: String, required: true },
    officerSurname: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });

 
module.exports = mongoose.model("Customer", CustomerSchema);
