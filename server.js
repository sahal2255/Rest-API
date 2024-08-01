const express=require('express')
const dotenv=require('dotenv')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const productRoute=require('./routers/productRoute')
// const bodyParser = require('body-parser')

const app=express()
app.use(express.json())


app.use('/',productRoute)


mongoose.connect('mongodb://localhost:27017/ecommerce')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const PORT= 3005
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})