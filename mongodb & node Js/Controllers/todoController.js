const Todo = require("../Models/todoModel");

//create todo

let addNewTodo=async(req,res)=>{
    let todo= Todo.create({
        userId:req.body.userId,
        title:req.body.title,
        status: req.body.status,
        tags:req.body.tags
    })
    let result=await todo.save();
    if(result){
        res.send("new data saved")
    }else{
            res.status(400).send("bad request");
        }
    }


//get todo by userId

let getTodoByUserId= async(req,res)=>{
    let todo= await Todo.find({userId:req.params.id});

    if(!todo){
        return res.status(404).send("todo not found");
    }
    res.send(todo);
  
}

//delete user
let deletetodo = async(req,res)=>{
    let todo= await Todo.findByIdAndDelete(req.params.id);
    if(!todo){
        return res.status(404).send("todo wasnot found");
    }
    res.send(todo);
}
//update user

let UpdateTodo = async(req,res)=>{
    let todo = await Todo.findOneAndUpdate(req.params.id,req.body,{
        returnOriginal:false
    });
    if(!todo){
        return res.status(404).send("todo wasnot found");
    }
    res.send(todo);
}

//expor functions
module.exports={
    UpdateTodo,
    deletetodo,
    getTodoByUserId,
    addNewTodo
}