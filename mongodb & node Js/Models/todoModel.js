const mongoose=require('mongoose');
const User = require("./userModel")
//creating Schemas

const todoSchema = new mongoose.Schema({
    userId: User.findOne({},{_id:1}),
    title: {type:String, required:true, min:5, max:20},
    status: {type:String, default:"to-do"},
    tags: [String],

})

//create Models

const Todo= mongoose.model("Todo", todoSchema);

module.exports=Todo;