const mongoose = require('mongoose');

const subCategory = new mongoose.Schema({
    name: { type: String, required: true , trim: true, unique: [true, "Subcategory must be Unique"],
    minLength: [2,"Too short SubCategory name"],
    maxLength: [32, "Too logn SubCategory name"],},
    slug:{
        type: String,
        lowercase: true,
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: [true, 'SubCategory must be belong to the parent category']
    }
}, { timestamps: true });

module.exports = mongoose.model("SubCategory",subCategory )