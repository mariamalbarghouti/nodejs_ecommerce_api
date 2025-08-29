const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Name is required'],
    },
    slug: {
        type: String,
        lowercase: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true
    },
    phone: String,
    profileImage: String,
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    },
    passwordChangedAt: Date,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    active: {
        type: Boolean,
        default: true
    },
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

module.exports = mongoose.model('User', userSchema);