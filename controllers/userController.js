const Products = require('../models/product');
const User = require('../models/user');
const jwt = require('jsonwebtoken')
require('dotenv').config()


const signUP = async (req, res) => {
    const { email, userName,number } = req.query;
    console.log(req.query);
    try {
        const user = new User({ email, userName ,number });
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
        res.cookie('token', token, { httpOnly: true });
        console.log(user);
        res.status(200).json({token})
    }catch(error){
        console.log('login error');
        res.status(500).json({message:'login error'})
    }
}

const showProduct = async (req, res) => {
    try {
      const products = await Products.find();
      res.status(200).json(products);
    } catch (error) {
      console.error('error products show:', error);
      res.status(500).json({ message: 'error products' });
    }
  };



  const sortingPrice=async (req,res)=>{
    const {sort}=req.query
    console.log(req.query);
    
    let sortOrder={}
    if(sort==='low-to-high'){
        sortOrder={price:1}
    }
    else if(sort==='high-to-low'){
        sortOrder={price:-1}
    }
    else{
        return res.status(400).json({error:'invalid'})
    }
    try{
        const sortedProducts=await Products.find().sort(sortOrder)
        res.status(200).json(sortedProducts)
    }catch(error){
        console.log('sorting error');
        
    }
  }

  const profile = async (req, res) => {
    try {
      const userId = req.user.userId;
    console.log(userId);
  
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Respond with user details
      res.status(200).json(user);
    } catch (error) {
      console.log('edit profile error', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  const editProfile=async(req,res)=>{
    try{
        const userId=req.user.userId
        console.log('userid',userId);
        const {email,userName,number}=req.query
        const updatedUser=await User.findByIdAndUpdate(userId,
            {email,userName,number},
            {new:true}
        )
        res.status(200).json(updatedUser)

        
    }
    catch(error){
        console.log('error');
        
    }
  }

  const logout=async(req,res)=>{
    try{
        res.clearCookie('token')
        res.status(200).json({message:'logout successfully'})
    }catch(error){
        console.log('logout error',error);
        
    }
  }

module.exports = {
    signUP,
    login,
    showProduct,
    sortingPrice,
    profile,
    editProfile,
    logout
};
