const express = require('express');
const router = express.Router();
const todoController = require("../Controllers/todoController");

router.all("/",(req,res,nxt)=>{
    console.log("request received on user collection");
    nxt();
})

router.param("id",(req,res,nxt,val)=>{
    if(/^[0-9a-fA-F]{24}$/.test(val)){
        req.id = val;
        nxt();
    }else{
        res.status(400).send("invalid id");
    }
});

//request all users
router.get("/:id",todoController.getTodoByUserId);

//create user
router.post("/",todoController.addNewTodo);

//update user
router.patch("/:id",todoController.UpdateTodo);

//delete user
router.delete("/:id",todoController.deletetodo);

module.exports=router;