const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('/', userController.getAll);

router.get('/:username', userController.getUser);

router.post('/', userController.create);

router.delete('/',userController.deleteUser);

router.put('/',userController.updateUser);

module.exports = router;
