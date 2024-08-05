const express=require('express')
const dotenv=require('dotenv')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const productRoute=require('./routers/productRoute')
const userRoute=require('./routers/userRoute')
const swaggerUI=require('swagger-ui-express')
const swaggerSpec=require('./swaggerConfig')
const cookieParser = require('cookie-parser');

const app=express()
app.use(express.json())
app.use(cookieParser());  
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerSpec))

app.use('/',productRoute)
app.use('/',userRoute)

mongoose.connect('mongodb://localhost:27017/ecommerce')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const PORT= 3001
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})