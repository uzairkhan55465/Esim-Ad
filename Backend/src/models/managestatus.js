const mongoose = require('mongoose');
const crypto = require("crypto");
const Schema = mongoose.Schema;

const ManagestatusSchema = new Schema({
    status: { type: Boolean}
}, { timestamps: true });

 
module.exports = mongoose.model("Managestatus", ManagestatusSchema);
