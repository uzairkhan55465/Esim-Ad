const mongoose = require('mongoose');
const crypto = require("crypto");
const Schema = mongoose.Schema;

const SettingSchema = new Schema({
    metatitle: { type: String},
    metaDescription: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    whatsapp: { type: Number, required: true }
}, { timestamps: true });

 
module.exports = mongoose.model("Setting", SettingSchema);
