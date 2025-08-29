const express = require('express');
const router = express.Router();
const {
    getUserValidator,
    createUserValidator,
    deleteUserValidator,
    updateUserValidator,
    changeUserPasswordValidator,
} = require('../utils/validators/user_validator');

const { getUserById,
    createUser,
    getUsers,
    deleteUser,
    updateUser,
    uploadUserImage,
    resizeImage,
    changeUserPassword,
} = require('../controllers/user_controller');

router.use('/changePassword/:id', changeUserPasswordValidator, changeUserPassword);

router.route('/')
    .get(getUsers)
    .post(
        uploadUserImage,
        resizeImage,
        createUserValidator,
        createUser);

router.route('/:id')
    .get(getUserValidator, getUserById)
    .put(uploadUserImage, resizeImage, updateUserValidator, updateUser)
    .delete(deleteUserValidator, deleteUser);
module.exports = router;