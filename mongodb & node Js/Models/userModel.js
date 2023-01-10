const mongoose=require('mongoose');

//creating Schemas

const userSchema=new mongoose.Schema({
    userName: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    firstName: {type:String, required:true, min:3, max:15 },
    age: {type:Number, min:13}
})

//create Models

const User= mongoose.model("User", userSchema);

module.exports=User;