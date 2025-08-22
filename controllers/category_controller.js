const Category = require('../models/category_model');
const factory = require('./core/handlers_factory');

// @desc Get Categories
// @route GET /api/v1/categories
// @access Public
exports.getCategories = factory.getAll(Category);


// @desc Get Category by ID
// @route GET /api/v1/categories/:id
// @access Public
exports.getCategoryById = factory.getOne(Category);

// @desc Create Category
// @route POST /api/v1/categories
// @access Private
exports.createCategory = factory.createOne(Category);
// @desc Update Category
// @route PUT /api/v1/categories/:id
// @access Private
exports.updateCategory = factory.updateOne(Category);

// @desc Delete Category
// @route DELETE /api/v1/categories/:id
// @access Private              
exports.deleteCategory = factory.deleteOne(Category);
