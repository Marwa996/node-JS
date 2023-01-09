const express = require("express");
const app = express();
const path=require("path");

const userRouter = require("./routes/user");
const todoRouter = require("./routes/todo");

app.use(express.urlencoded({extended:true}));

app.use("/register",userRouter);
app.use("/login",userRouter);

app.use("/todos",todoRouter);
app.use("/todos/:id",todoRouter);

app.listen(4000,function(){
    console.log("connected to Server");
})
