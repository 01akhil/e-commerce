const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String, // Use String instead of email
        required: true,
        unique: true,
    },
    password: {
        type: String, // Use String instead of password
        required: true,
        minlength: 8,
    },
    role: {
        type: String,
        default: 'user', // Add quotes around 'user'
    }
});

const User = mongoose.model('User', UserSchema);

module.exports=User;