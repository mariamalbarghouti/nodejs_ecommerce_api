const express = require('express');
// mergeParams allows us to access the parent route's parameters    

const router = express.Router({ mergeParams: true });

const { createSubCategory,
    getSubCategories,
    getSubCategoryById,
    updateSubCategory,
    deleteSubCategory,
    setCategoryIdToBody, createFilterObject
} = require('../controllers/subcategory_controller');
const { createSubCategoryValidator,
    getSubCategoryByIdValidator,
    updateSubCategoryValidator,
    deleteSubCategoryValidator } = require('../utils/validators/subcategory_validator');



router.route('/')
    .post(setCategoryIdToBody, createSubCategoryValidator, createSubCategory)
    .get(createFilterObject, getSubCategories);

router.route('/:id')
    .get(getSubCategoryByIdValidator, getSubCategoryById)
    .put(updateSubCategoryValidator, updateSubCategory)
    .delete(deleteSubCategoryValidator, deleteSubCategory);

module.exports = router;