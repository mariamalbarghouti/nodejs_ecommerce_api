const express = require('express');
const router = express.Router();

const {protect} = require('../middlewares/token_middleware.js');

const { getCategoryByIdValidator,
    updateCategoryValidator,
    deleteCategoryValidator,
    createCategoryValidator } = require('../utils/validators/gategory_validator');

const { getCategories,
    createCategory,
    getCategoryById,
    deleteCategory,
    updateCategory } = require('../controllers/category_controller');
const subCategoryRoutes = require('./subcategory_routes');

router.use('/:categoryId/subcategories', subCategoryRoutes);

router.route('/')
    .get(getCategories)
    .post(protect,createCategoryValidator, createCategory);

router.route('/:id')
    .get(getCategoryByIdValidator, getCategoryById)
    .put(updateCategoryValidator, updateCategory)
    .delete(deleteCategoryValidator, deleteCategory);
module.exports = router;