const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    type:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    pic:{
        type:String
    }
})
module.exports = mongoose.model('Item',itemSchema)