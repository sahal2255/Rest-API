const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

/**
 * @swagger
 * /user/signup:
 *  post:
 *    summary: Signup a new user
 *    parameters:
 *      - in: query
 *        name: email
 *        schema:
 *          type: string
 *        required: true
 *        description: User's email address
 *      - in: query
 *        name: userName
 *        schema:
 *          type: string
 *        required: true
 *        description: User's username
 *      - in: query
 *        name: number
 *        schema:
 *          type: number
 *        required: true
 *        description: User's contact number
 *    responses:
 *      201:
 *        description: User successfully created
 *      500:
 *        description: Internal server error
 */

router.post("/signup", userController.signUP);

/**
 * @swagger
 * /user/login:
 *  post:
 *    summary: Login user
 *    parameters:
 *      - in: query
 *        name: email
 *        schema:
 *          type: string
 *        required: true
 *        description: User email address
 *    responses:
 *      200:
 *        description: User successfully logged in
 *      404:
 *        description: User not found
 *      500:
 *        description: Internal server error
 */

router.post("/login", userController.login);

/**
 * @swagger
 * /user/showproduct:
 *   get:
 *     summary: Retrieve a list of products
 *     responses:
 *       200:
 *         description: A list of products
 */
router.get("/showproduct", userController.showProduct);

/**
 * @swagger
 * /user/sortedprice:
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
 * /user/profile:
 *   get:
 *     summary: Retrieve the user profile
 *     responses:
 *       200:
 *         description: user profile
 */
router.get("/profile", authMiddleware, userController.profile);
/**
 * @swagger
 * /user/editprofile:
 *   put:
 *     summary: Update user profile
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         description: User email
 *       - in: query
 *         name: userName
 *         schema:
 *           type: string
 *         description: User name
 *       - in: query
 *         name: number
 *         schema:
 *           type: number
 *         description: User phone number
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */

router.put("/editprofile", authMiddleware, userController.editProfile);
router.post("/logout", authMiddleware, userController.logout);
module.exports = router;
