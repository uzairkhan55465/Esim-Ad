const jwt = require('jsonwebtoken');
const Managestatus = require('../models/managestatus');

exports.Managestatus = async (req, res) => {
    const { status } = req.body; // assuming status is the boolean value sent from the frontend

    try {
        // Check if there's existing data
        let managestatus = await Managestatus.findOne();

        if (managestatus) {
            // Update existing data
            managestatus.status = status;
            await managestatus.save();
            return res.status(200).json({ success: true, message: "Data updated successfully", data: managestatus });
        } else {
            // Create new data
            managestatus = new Managestatus({ status });
            await managestatus.save();
            return res.status(201).json({ success: true, message: "Data created successfully", data: managestatus });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};
