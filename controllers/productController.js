const Products=require('../models/product')

const createProduct=async (req,res)=>{
    const { name, description,productId, price, quantity } = req.query;
    console.log(req.query);
    try{
        const product=new Products({name,description,productId,price,quantity})
        console.log(product);
        await product.save()

        res.status(201).json({message:'product added successfully'})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}
const getProduct=async (req,res)=>{
    const pro=await Products.find()
    console.log(pro);
    // res.send({message:'getting'})
    res.status(200).json(pro)
}

const updateProduct=async (req,res)=>{
    const {productId}=req.query
    console.log(req.query);
    try{
        const updatePro=await Products.findOne({productId})
        console.log(updatePro);
        res.status(200).json(updatePro)
    }catch(error){
        res.status(500).json({error:error.message})
    }
    
}
const deleteProduct=async (req,res)=>{
    const {productId}=req.query
    console.log(req.query);
    try{
        const product = await Products.findByIdAndUpdate({productId:productId})

    }catch(error){
        res.status(500).json({error:error.message})
    }
}

module.exports ={
    createProduct,
    getProduct,
    updateProduct,
}