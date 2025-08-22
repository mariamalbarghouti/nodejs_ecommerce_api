const Product = require('../models/product_model');
const factory = require('./core/handlers_factory');  

// @desc Get Products
// @route GET /api/v1/products
// @access Public
exports.getProducts = factory.getAll(Product,'Products');
// @desc Get Product by ID
// @route GET /api/v1/products/:id
// @access Public
exports.getProductById = factory.getOne(Product, { path: 'category', select: 'name -_id' });

// @desc Create Products
// @route POST /api/v1/products
// @access Private
exports.createProduct = factory.createOne(Product);

// @desc Update Product
// @route PUT /api/v1/products/:id
// @access Private
exports.updateProduct = factory.updateOne(Product);
// @desc Delete Product
// @route DELETE /api/v1/products/:id
// @access Private
exports.deleteProduct = factory.deleteOne(Product);