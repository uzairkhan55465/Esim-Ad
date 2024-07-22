const mongoose = require('mongoose');
const crypto = require("crypto");
const Schema = mongoose.Schema;

const ProductcatalogSchema = new Schema({
    id: { type: String},
    product_name: { type: String, required: true },
    volume: { type: Number, required: true },
    unit: { type: String, required: true },
    validity_days: { type: Number, required: true },
    price: { type: String, required: true },
    currency: { type: String, required: true },
    coverage: { type: String, required: true },
    subscription: { type: String, required: true },
    profile: { type: String, required: true },
    link: { type: String, required: true },
}, { timestamps: true });

 
module.exports = mongoose.model("Productcatalog", ProductcatalogSchema);
