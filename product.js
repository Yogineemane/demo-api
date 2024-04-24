require("dotenv/config.js")
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ProductRoute = require('./route/productRoute')

const product = express()

product.use(express.json())
product.use(cors())

product.get('/',(req,res)=>{
    res.send("HELLO")
})

product.use('/api/product',ProductRoute)

product.listen(process.env.PORT || 5000)

async function mongoConnection() {
   try {
    const res = await mongoose.connect(process.env.DB)
    const data = await res.default
    console.log(data.STATES.connected);
   } catch (error) {
    console.log("Error",error.message);
   }
} 
mongoConnection()