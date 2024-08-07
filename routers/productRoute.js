const express = require('express')
const router=express.Router()
const productController= require('../controllers/productController')

/**
 * @swagger
 * /product:
 *   get:
 *     summary: Retrieve a list of products
 *     responses:
 *       200:
 *         description: A list of products
 */
router.get('/product',productController.getProduct)

/**
 * @swagger
 * /create:
 *   post:
 *     summary: Create a new product
 *     description: Creates a new product with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the product
 *                 example: ""
 *               description:
 *                 type: string
 *                 description: Description of the product
 *                 example: ""
 *               productId:
 *                 type: string
 *                 description: product id
 *                 example: ""
 *               price:
 *                 type: number
 *                 format: float
 *                 description: Price of the product
 *                 example: 
 *               quantity:
 *                 type: number
 *                 description: Quantity of the product 
 *                 example: 
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product created successfully"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */
router.post('/create', productController.createProduct);


/**
 * @swagger
 * /updateproduct:
 *   put:
 *     summary: Update a product
 *     parameters:
 *       - in: query
 *         name: productId
 *         schema:
 *           type: string
 *         required: true
 *         description: The product ID
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: The product name
 *       - in: query
 *         name: description
 *         schema:
 *           type: string
 *         description: The product description
 *       - in: query
 *         name: price
 *         schema:
 *           type: number
 *         description: The product price
 *       - in: query
 *         name: quantity
 *         schema:
 *           type: number
 *         description: The product quantity
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       404:
 *         description: Product not found
 */
router.put('/updateproduct',productController.updateProduct)

/**
 * @swagger
 * /productdelete:
 *   delete:
 *     summary: Delete a product
 *     parameters:
 *       - in: query
 *         name: productId
 *         schema:
 *           type: string
 *         required: true
 *         description: The product ID
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 */
router.delete('/productdelete',productController.deleteProduct)

module.exports=router