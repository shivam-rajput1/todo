const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller');
console.log('User loaded111');
router.post('',userController.addtask);

module.exports = router;