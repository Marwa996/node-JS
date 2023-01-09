const express = require("express");
const router = express.Router();
const fs=require('fs');

router.use(express.urlencoded({extended:true}));

//create todo

router.post("/todos",function(req,res){
    let todo=fs.readFileSync('todo.json','utf-8');
    user=JSON.parse(todo);
    user.push(req.body);
    fs.writeFileSync("todo.json",JSON.stringify(user,null,2),'utf-8');
    res.send({message:"todo created successfully"});
})

//list all todos

router.get("/todos",function(req,res){
    res.sendFile(path.join(__dirname,"todo.json"));
})

//get todo with Id

router.get("/todos/:id",function(req,res){
    let todo=fs.readFileSync("todo.json","utf-8");
    todo=JSON.parse(todo);
    let data=todo.find((item)=>item.id==req.params.id);
    res.send(data);
})

module.exports = router;