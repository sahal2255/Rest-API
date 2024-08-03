const express = require('express')
const router=express.Router()
// const Products=require('../models/product')
const productController= require('../controllers/productController')
// const authMiddleware = require('../middleware/authMiddleware')

// router.use(authMiddleware)

router.get('/',productController.getProduct)
router.post('/create',productController.createProduct)
router.get('/updateproduct',productController.updateProduct)
router.delete('/productdelete',productController.deleteProduct)

module.exports=router