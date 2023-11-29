const Item = require('../models/item')

exports.createItem =async(req,res)=>{
    try{
        const {type,name,description ,price,pic}= req.body;
        if(!type || !name || !description || !price || !pic){
            return res.status(300).json({
                message:"enter all feilds"
            })
        }
        const newItem = new Item({
            name,
            type,
            description,
            price,
            pic,
        })
        await newItem.save();
        return res.status(201).json({
            message:"item saved"
        })
    }catch(err){
           return res.status(500).json({
            message:"server error",err
           })
    }
}

exports.getItemByType = async(req,res)=>{
    try{
        const type = req.params.type;
        const items = await Item.find({type});
        if(!items){
            return res.status(500).json({
                message:"no item found"
            })
        }
        return res.status(201).json({
            message:"items retrieved",
            items :items  
        })

    }catch(err){
      return res.status(400).json({
        message:"internal server error",err
      })
    }
}