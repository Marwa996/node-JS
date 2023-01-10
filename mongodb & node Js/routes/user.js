const express = require('express');
const router = express.Router();
const userController = require("../Controllers/userController");

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
router.get("/",userController.getUsers);

//create user
router.post("/register",userController.addNewUser);

//update user
router.patch("/:id",userController.UpdateUser);

//delete user
router.delete("/:id",userController.deleteUser);

module.exports=router;