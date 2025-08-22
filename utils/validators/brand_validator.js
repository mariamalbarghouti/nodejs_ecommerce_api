const { check } = require('express-validator');
const validatorMiddleware = require('../../middlewares/validator_middleware');
const slugify = require('slugify');

exports.getBrandByIdValidator = [
    check('id').isMongoId().withMessage('Invalid id formate'),
    validatorMiddleware,
];

exports.createBrandValidator = [
    check('name')
        .notEmpty()
        .withMessage('Brand name is required')
        .isLength({ min: 3 })
        .withMessage('Too short brand name')
        .isLength({ max: 32 })
        .withMessage('Too long brand name')
        .custom((value, { req }) => {
            req.body.slug = slugify(value);
            return true;
        }),
    validatorMiddleware
];
exports.updateBrandValidator = [
    check('id').isMongoId().withMessage('Invalid id formate'),
    check('name')
        .notEmpty()
        .withMessage('Brand name is required')
        .isLength({ min: 3 })
        .withMessage('Too short brand name')
        .isLength({ max: 32 })
        .withMessage('Too long brand name')
        .custom((value, { req }) => {
            req.body.slug = slugify(value);
            return true;
        }),
    validatorMiddleware,
];
exports.deleteBrandValidator = [
    check('id').isMongoId().withMessage('Invalid id formate'),
    validatorMiddleware,
];