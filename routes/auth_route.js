const express = require('express');
const router = express.Router();
const {
    signUpValidator,
    loginValidator,
} = require('../utils/validators/auth_validator');

const {
    signUp,
    login,
} = require('../controllers/auth_controller');

router.route('/signup')
    .post(signUpValidator, signUp);

router.route('/login')
    .post(loginValidator, login);

module.exports = router;