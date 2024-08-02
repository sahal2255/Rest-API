const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup', userController.signUP);
router.post('/login',userController.login)

module.exports = router;
