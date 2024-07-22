const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthTokenSchema = new Schema({
    userid: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    expiresAt: {
        type: Date,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('AuthToken', AuthTokenSchema);