const express = require("express");
const fs=require('fs');
const { check, validationResult } = require('express-validator');
const router = express.Router();

router.use(express.urlencoded({extended:true}));

//validator

var registerValidator=[
    check("userName","user-name is required").isEmpty(),
    check("password","password is required").isEmpty(),
    check("firstName","first name is required").isEmpty(),
]

//register

router.post("/register", registerValidator, function(req,res){
   
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({errors:errors.array() });
    }else{
        let user=fs.readFileSync('user.json','utf-8');
        user=JSON.parse(user);
        user.push(req.body);
        fs.writeFileSync("user.json",JSON.stringify(user,null,2),'utf-8');
        res.send({message:"user was registered successfully"});    
    }
})

//searching in the file

function getUsers(name)
{
   let user=fs.readFileSync("user.json","utf-8");
   user=JSON.parse(user);
   let data=user.find((item)=>item.userName==name);
   return data;

}

//login

router.post("/login",function(req,res){
    let name=req.body.userName;
    let data= getUsers(name);
    if(data==undefined)
    {
        res.status(401).send({error:"invalid credentials"})
    }
    else
    res.send({message:"logged in successfully",profile:{name:req.body.userName}});
})


module.exports = router;