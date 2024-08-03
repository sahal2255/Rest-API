const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware=require('../middleware/authMiddleware')

router.post('/signup', userController.signUP);
router.post('/login',userController.login)
router.get('/showproduct',authMiddleware,userController.showProduct)

module.exports = router;
