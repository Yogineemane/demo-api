const Product = require('../model/products')

exports.getProduct = async (req,res)=>{
    try {
        const data = await Product.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postProduct = async (req,res)=>{
    try {
        const data = await Product.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true, message:error.message})
    }
}

exports.putProduct = async (req,res)=>{
    try {
        const data = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true, message:error.message})
    }
}

exports.deleteProduct = async (req,res)=>{
    try {
        const data = await Product.findByIdAndDelete(req.param.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true, message:error.message})
    }
}