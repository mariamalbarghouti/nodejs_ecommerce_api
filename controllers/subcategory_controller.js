const SubCategory = require('../models/subcategory_model');
const slugify = require('slugify');
const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/api_error');
const ApiFeatures = require('../utils/api_features');
const factory = require('./core/handlers_factory');  

// @desc Create SubCategory
// @route POST /api/v1/subcategories
// @access Private
exports.createSubCategory = factory.createOne(SubCategory);

// GET /api/v1/subcategories/:categoryId/subcategories
// @desc Get SubCategories by Category
// @route GET /api/v1/subcategories/:categoryId/subcategories
// @access Public
exports.getSubCategoriesByCategory = asyncHandler(async (req, res) => {
    const { categoryId } = req.params;
    const subCategories = await SubCategory.find({ category: categoryId });
    res.status(200).json({ data: subCategories });
});

// Middleware
exports.createFilterObject = (req, res, next) => {
    let filterObject = {};
    if (req.params.categoryId) {
        filterObject = { category: req.params.categoryId };
    }
    req.filterObject = filterObject;
    next();
};

// @desc Get SubCategories
// @route GET /api/v1/subcategories
// @access Public
exports.getSubCategories = factory.getAll(SubCategory);

//middleware
exports.setCategoryIdToBody = (req, res, next) => {
    if (!req.body.category) {
        req.body.category = req.params.categoryId;
    }
    next();
};


// @desc Get SubCategory by ID
// @route GET /api/v1/subcategories/:id
// @access Public
exports.getSubCategoryById = factory.getOne(SubCategory, { path: 'category', select: 'name -_id' });

// @desc Update SubCategory
// @route PUT /api/v1/subcategories/:id
// @access Private
exports.updateSubCategory = factory.updateOne(SubCategory);

// @desc Delete SubCategory
// @route DELETE /api/v1/subcategories/:id
// @access Private
exports.deleteSubCategory = factory.deleteOne(SubCategory);
