const { check} = require('express-validator');
const validatorMiddleware = require('../../middlewares/validator_middleware');
const slugify = require('slugify');

exports.getSubCategoryByIdValidator = [
    check('id')
        .notEmpty()
        .withMessage('SubCategory is required')
        .isMongoId().withMessage('Invalid id formate'),
    validatorMiddleware,
];

exports.createSubCategoryValidator = [
    check('name')
        .notEmpty()
        .withMessage('SubCategory name is required')
        .isLength({ min: 2 })
        .withMessage('Too short SubCategory name')
        .isLength({ max: 32 })
        .withMessage('Too long SubCategory name')
         .custom((value, { req }) => {
            req.body.slug = slugify(value);
            return true;
        }),
    check('category')
        .notEmpty()
        .withMessage('Category is required')
        .isMongoId()
        .withMessage('Invalid category id format'),
    validatorMiddleware
];
exports.updateSubCategoryValidator = [
    check('id').isMongoId().withMessage('Invalid id formate'),
    check('name')
        .notEmpty()
        .withMessage('SubCategory name is required')
        .isLength({ min: 3 })
        .withMessage('Too short SubCategory name')
        .isLength({ max: 32 })
        .withMessage('Too long SubCategory name')
        .custom((value, { req }) => {
            req.body.slug = slugify(value);
            return true;
        }),
    validatorMiddleware,
];
exports.deleteSubCategoryValidator = [
    check('id').notEmpty()
        .withMessage('SubCategory id is required')
        .isMongoId().withMessage('Invalid id formate'),
    validatorMiddleware,
];