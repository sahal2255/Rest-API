const express = require('express')
const router=express.Router()
// const Products=require('../models/product')
const productController= require('../controllers/productController')

router.get('/',productController.getProduct)
router.post('/create',productController.createProduct)
router.get('/productfind',productController.updateProduct)

module.exports=router