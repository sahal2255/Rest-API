const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware=require('../middleware/authMiddleware')

router.post('/signup', userController.signUP);
router.post('/login',userController.login)
router.get('/showproduct',userController.showProduct)
router.get('/sortedprice',authMiddleware,userController.sortingPrice)
router.get('/profile',authMiddleware,userController.profile)
router.put('/editprofile',authMiddleware,userController.editProfile)
module.exports = router;
