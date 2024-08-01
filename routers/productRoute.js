const express = require('express')
const router=express.Router()
const Products=require('../models/product')
const productController= require('../controllers/productController')

router.get('/',productController.getProduct)
router.post('/create',productController.createProduct)

module.exports=router