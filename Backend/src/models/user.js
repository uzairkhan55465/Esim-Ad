const mongoose = require('mongoose');
const crypto = require("crypto");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    }
}, { timestamps: true });

UserSchema.statics.genrateHash = async function (password) {
    return new Promise((resolve, reject) => {
        crypto.scrypt(password, process.env.PASS_HASH_KEY, 64, (err, derivedKey) => {
            if (err) reject(err);
            return resolve(derivedKey.toString('hex'));
        });
    });
};

UserSchema.methods.comparePassword = async function (password, comparePass) {
    return new Promise((resolve, reject) => {
        crypto.scrypt(password, process.env.PASS_HASH_KEY, 64, (err, derivedKey) => {
            if (err) {
                reject(err);
            } else {
                const hashedInputPassword = derivedKey.toString('hex');
                if (hashedInputPassword === comparePass) {
                    return resolve(true);
                } else {
                    return resolve(false);
                }
            }
        });
    });
};

module.exports = mongoose.model("User", UserSchema);
