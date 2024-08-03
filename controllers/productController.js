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
    // console.log(pro);
    // res.send({message:'getting'})
    res.status(200).json(pro)
}

const updateProduct=async (req,res)=>{
    const {productId,...updateFields}=req.query
    console.log(req.query);
    try{
        const updatedProduct=await Products.findOneAndUpdate(
            {productId},
            updateFields,
            { new: true}
        );
        console.log('working',updatedProduct);
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
          }
      
          console.log(updatedProduct);
          res.status(200).json(updatedProduct)
    }catch(error){
        console.error('Error updating product:', error);
        res.status(500).json({error:error.message})
    }
    
}
const deleteProduct = async (req, res) => {
    const { productId } = req.query;
    console.log('Request query:', req.query);

    try {
        const result = await Products.deleteOne({ productId });

        if (result.deletedCount === 0) {
            console.log('Product not found');
            return res.status(404).json({ message: 'Product not found' });
        }

        console.log('Product deleted:', result);
        return res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.log('Delete error:', error);
        return res.status(500).json({ error: error.message });
    }
};

module.exports ={
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
}