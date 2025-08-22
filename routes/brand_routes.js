const express = require('express');
const router = express.Router();
const { getBrandByIdValidator,
    updateBrandValidator,
    deleteBrandValidator,
    createBrandValidator } = require('../utils/validators/brand_validator');

const { getBrands,
    createBrand,
    getBrandById,
    deleteBrand,
    updateBrand,
    applySlugify } = require('../controllers/brand_controller');


router.route('/')
    .get(getBrands)
    .post(createBrandValidator, createBrand);

router.route('/:id')
    .get(getBrandByIdValidator, getBrandById)
    .put(updateBrandValidator, updateBrand)
    .delete(deleteBrandValidator, deleteBrand);
module.exports = router;