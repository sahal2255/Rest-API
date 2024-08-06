const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Signup a new user
 *     description: Creates a new user 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User's email address
 *                 example: ""
 *               userName:
 *                 type: string
 *                 description: User's username
 *                 example: ""
 *               number:
 *                 type: number
 *                 description: User's contact number
 *                 example: 
 *     responses:
 *       201:
 *         description: User successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User successfully created"
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


router.post("/signup", userController.signUP);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login user
 *     description: Authenticates a user and returns a JWT token.
 *     
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User's email address
 *                 example: "user@example.com"
 *     responses:
 *       200:
 *         description: User successfully logged in and token returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for the authenticated user
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

router.post("/login", userController.login);

/**
 * @swagger
 * /showproduct:
 *   get:
 *     summary: Retrieve a list of products
 *     responses:
 *       200:
 *         description: A list of products
 */
router.get("/showproduct", userController.showProduct);

/**
 * @swagger
 * /sortedprice:
 *   get:
 *     summary: List sorted products
 *     parameters:
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [low-to-high, high-to-low]
 *           description: The sort order for listing products
 *     responses:
 *       200:
 *         description: Products sorted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Product ID
 *                   name:
 *                     type: string
 *                     description: Product name
 *                   price:
 *                     type: number
 *                     description: Product price
 *                   description:
 *                     type: string
 *                     description: Product description
 *                   quantity:
 *                     type: number
 *                     description: Product quantity
 *       400:
 *         description: Invalid sort parameter
 *       500:
 *         description: Server error
 */

router.get("/sortedprice", authMiddleware, userController.sortingPrice);
/**
 * @swagger
 * /profile:
 *   get:
 *     summary: Retrieve the user profile
 *     responses:
 *       200:
 *         description: user profile
 */
router.get("/profile", authMiddleware, userController.profile);
/**
 * @swagger
 * /editprofile:
 *   put:
 *     summary: Update user profile
 *     description: Updates the profile .
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User's email address
 *                 example: ""
 *               userName:
 *                 type: string
 *                 description: User's username
 *                 example: ""
 *               number:
 *                 type: number
 *                 description: User's contact number
 *                 example: 
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                 userName:
 *                   type: string
 *                 number:
 *                   type: number
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */


router.put("/editprofile", authMiddleware, userController.editProfile);
/**
 * @swagger
 * /logout:
 *   post:
 *     summary: User logout
 *     description: Clears the authentication token cookie and logs the user out.
 *     
 *     responses:
 *       200:
 *         description: Successfully logged out
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: logout successfully
 *       500:
 *         description: Internal server error
 */
router.post("/logout", authMiddleware, userController.logout);
module.exports = router;
