const mongoose = require('mongoose');
const express = require('express');
const app=express();

const userRoute = require("./routes/user");
const todoRoute = require("./routes/todo")
//setting connection
app.use(express.urlencoded({extended:true}));

mongoose.connect("mongodb://127.0.0.1:27017/todo",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log("connection failed")
});

app.use("/users",userRoute);
app.use("/todos",todoRoute);


app.listen(7000, () => {
    console.log("Server is running at port 7000");
  });