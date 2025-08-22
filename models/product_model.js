const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Product title is required'],
        trim: true,
        minlength: [3, 'Product title must be at least 3 characters long'],
        maxlength: [100, 'Product title must be less than 100 characters long']
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
    },
    description: {
        type: String,
        required: [true, 'Product description is required'],
        minlength: [20, 'Product description must be at least 20 characters long'],
    },
    quantity: {
        type: Number,
        required: [true, 'Product quantity is required'],
        min: [0, 'Product quantity must be positive']
    },
    sold: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        min: [0, 'Product price must be positive'],
        trim: true,
        maxlength: [20, 'Product price must be less than 20 characters long']
    },
    priceAfterDiscount: {
        type: Number,
        default: 0
    },
    colors: [String],
    imageCover: {
        type: String,
        required: [true, 'Product image is required']
    },
    images: [String],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Product category is required']
    },
    subcategories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SubCategory',
            required: [true, 'Product subcategory is required']
        }
    ],
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: [true, 'Product brand is required']
    },
    ratingsAverage: {
        type: Number,
        min: [1, 'Rating must be above or equal to 1'],
        max: [5, 'Rating must be less than or equal to 5'],
    },
    ratingsQuantity: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timeseries: true });

module.exports = mongoose.model('Product', productSchema);