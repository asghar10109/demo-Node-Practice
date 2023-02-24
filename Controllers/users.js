const User = require('../models/users')

const get_user = async(req,res,next) => {
    const limit = req.query.limit;
    const offset = req.query.offset;
    const skip = (offset - 1) * limit;

    try{
        let data = await User.find().limit(limit).skip(skip)
        res.send({
            total: data.length,
            message:"Record Fetched",
            status:201,
            data: data
        })
    }catch(err){
        res.send({
            message:"No record",
            status:404
        })
    }
}

const post_user = async (req,res,next) => {
    
    try{
        const data = await User({
            username: req.body.username,
            avator: req.body.avator,
            email: req.body.email,
            password: req.body.password

        })
        const reg = await data.save()
        res.send({
            message:"create data successfully",
            status:201,
            data:reg
        })

    }
    catch(err){
        res.send({
            message:"no create any data",
            status:404
        })

    }

}

const update_data= async(req,res,next)=>{
    const username = req.params.username
    try{
        const data = await User.updateOne({username},{$set:{username:req.body.username}})
        res.send({
            message:"updated successfully !....",
            status:201,
            data:data
        })


    }
    catch(err){
        res.send({
            message:"no record",
            status:404
        })
    }
}


const delete_data = async(req,res,next)=>{
    const username = req.params.username
    try{
        const data = await User.deleteOne({username})
        res.send({
            message:"deleted data",
            status : 201,
            data:data
        })

    }
    catch(err){
        res.send({
            message: "no record",
            status:404
        })
    }
}

const get_data_by_id = async(req,res,next) => {
    const id = req.params.id;
    try{
        
        let data = await User.findById(id);
        res.send({
            message:"Record Fetched by id",
            status:201,
            data: data
        })
    }catch(err){
        res.send({
            message:"No record",
            status:404
        })
    }
}

const replace_data = async (req,res,next)=>{
    const _id = req.params._id
    try{
        const data = await User.replaceOne({_id},{username:"binate"})
        res.send({
            message:"replace",
            status:201,
            data:data 
        })
    }
    catch(err){
        res.send({
            message:" no replace",
            status:404

        })
    }

}

const find_one_and_delete = async(req,res,next)=>{
    const username = req.params.username
    try{
        const data = await User.findOneAndDelete({username})
        res.send({
            message:"delete one data ",
            status:201,
            data:data
        })
        
    }
    catch(err){
        res.send({
            message:" no replace",
            status:404

        })
    }

}


const upload_Images = async(req,res,next)=>{
    res.send({
        message:"upload images",
        Status:201
        
    })
}

module.exports = {
    get_user,
    post_user,
    update_data,
    delete_data,
    get_data_by_id,
    replace_data,
    find_one_and_delete,
    upload_Images
} 