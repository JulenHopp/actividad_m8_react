const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.put('/:Id', userController.updateUser);
router.delete('/:Id', userController.deleteUser);

module.exports = router;