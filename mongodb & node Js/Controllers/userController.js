const User = require("../Models/userModel");

//create user

let addNewUser=async(req,res)=>{
    let user= User.create({
        userName:req.body.userName,
            password:req.body.password,
            firstName: req.body.firstName,
            age:req.body.age
    })
    let result=await User.save;
    console.log(user);
    if(result){
        res.send("new data saved")
    }else{
            res.status(400).send("bad request");
        }
    }


//get user by Id

let getUserById= async(req,res)=>{
    let user= await User.findById(req.params.id);

    if(!user){
        return res.status(404).send("user not found");
    }
    res.send(user);
  
}

//get all users

let getUsers= async(req,res)=>{
    let user=await User.find({},{firstName:1,_id:0});
    res.send(user);
}

//delete user
let deleteUser = async(req,res)=>{
    let user= await User.findByIdAndDelete(req.params.id);
    if(!user){
        return res.status(404).send("user wasnot found");
    }
    res.send(user);
}
//update user

let UpdateUser = async(req,res)=>{
    let user = await User.findOneAndUpdate(req.params.id,req.body,{
        returnOriginal:false
    });
    if(!user){
        return res.status(404).send("user wasnot found");
    }
    res.send(user);
}

//expor functions
module.exports={
    addNewUser,
    getUserById,
    getUsers,
    deleteUser,
    UpdateUser
}