const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name:{
        type : String,
        require : true
    },
    price:{
        type : Number,
        require : true
    },
    description : {
        type : String,
        require : true
    },
    img :{
        type : String,
        require : true
    },
    category :{
        type : String,
        require : true
    },
    isActive :{
        type : Boolean,
        default : true
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})

module.exports = mongoose.model('product1',productSchema)