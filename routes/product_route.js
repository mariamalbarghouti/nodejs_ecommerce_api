const express = require('express');
const router = express.Router();
const {
    getProductByIdValidator,
    createProductValidator,
    updateProductValidator,
    deleteProductValidator
} = require('../utils/validators/product_validator');

const { getProductById,
    createProduct,
    getProducts,
    deleteProduct,
    updateProduct } = require('../controllers/product_controller');

router.route('/')
    .get(getProducts)
    .post(createProductValidator, createProduct);

router.route('/:id')
    .get(getProductByIdValidator, getProductById)
    .put(updateProductValidator, updateProduct)
    .delete(deleteProductValidator, deleteProduct);
module.exports = router;