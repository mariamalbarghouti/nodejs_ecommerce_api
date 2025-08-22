const { check } = require('express-validator');
const validatorMiddleware = require('../../middlewares/validator_middleware');
const slugify = require('slugify');

exports.getCategoryByIdValidator = [
    check('id').isMongoId().withMessage('Invalid id formate'),
    validatorMiddleware,
];

exports.createCategoryValidator = [
    check('name')
        .notEmpty()
        .withMessage('Category name is required')
        .isLength({ min: 3 })
        .withMessage('Too short category name')
        .isLength({ max: 32 })
        .withMessage('Too long category name')
        .custom((val, { req }) => {
            req.body.slug = slugify(val);
            return true;
        }),
    validatorMiddleware
];
exports.updateCategoryValidator = [
    check('id').isMongoId().withMessage('Invalid id formate'),
    check('name')
        .notEmpty()
        .withMessage('Category name is required')
        .isLength({ min: 3 })
        .withMessage('Too short category name')
        .isLength({ max: 32 })
        .withMessage('Too long category name'),
    validatorMiddleware,
];
exports.deleteCategoryValidator = [
    check('id').isMongoId().withMessage('Invalid id formate'),
    validatorMiddleware,
];