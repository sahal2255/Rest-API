const express=require('express')

const app=express()


app.use((req,res,next)=>{
    res.status(200).json({
        message:'working'
    })
})

app.listen(3541,()=>{
    console.log('running');
})