const Products = require('../models/product');
const User = require('../models/user');
const jwt = require('jsonwebtoken')
require('dotenv').config()
const signUP = async (req, res) => {
    const { email, userName } = req.query;
    console.log(req.query);
    try {
        const user = new User({ email, userName });
        console.log(user);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const login=async (req,res)=>{
    console.log('start');
    const { email }=req.query
    console.log(req.query);
    try{
        console.log('one');
        const user=await User.findOne({email:email})
        console.log(user);
        if(!user){
            console.log('user not found');
            res.status(404).json({error:'User Not Found'})
        }
        const token=jwt.sign(
            {userId:user._id,email:user.email},
            process.env.JWT_SECRET,
            {expiresIn:'1h'}
        )
        console.log(token);
        // res.cookie('token',token)
        console.log(user);
        res.status(201).json({token})
    }catch(error){
        console.log('login error');
        res.status(500).json({message:'login error'})
    }
}

const showProduct = async (req, res) => {
    try {
      const products = await Products.find();
      // console.log('user side', products);
      res.status(200).json(products);
    } catch (error) {
      console.error('error products show:', error);
      res.status(500).json({ message: 'error products' });
    }
  };

//   const editProfile=async(req,res)=>{
//     console.log(hello);
//   }
module.exports = {
    signUP,
    login,
    showProduct
};
