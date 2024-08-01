const Products=require('../models/product')

const createProduct=async (req,res)=>{
    const { name, description, price, quantity } = req.query;
    console.log(req.query);
    try{
        const product=new Products({name,description,price,quantity})
        console.log(product);
        await product.save()

        res.status(201).json({message:'product added successfully'})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}
const getProduct=async (req,res)=>{
    console.log('hello');
    const pro=await Products.find()
    console.log(pro);
    // res.send({message:'getting'})
    res.status(200).json(pro)
}

module.exports ={
    createProduct,
    getProduct
}