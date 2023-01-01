const express = require("express");
const app = express();
const path=require("path")

let arr=[
    {name:"Red", id:1},
    {name:"Blue", id:2},
    {name:"Green", id:3},
    {name:"Purple", id:4}
]

//passing client data to server using URL parameters

app.get("/products/:id", function(req,res){
    if(req.params.id%10 && req.params.id>=10){
        let id=(req.params.id)%10;
        const product=arr.find((val,index,arr)=>{return val.id==id})
        if(product){
            res.send(`<h1>Product Name is: ${product.name}</h1>`)
        }else{
            res.send("<h1>Product not found</h1>");
        }
    }
    else{
        res.send("<h1>You entered an invalid product id</h1>")
    }
})

//passing client data to server using query string(starting with "?" and have name value pairs)
//get method

app.get("/welcome", function(req,res){
    res.sendFile(path.join(__dirname,"/index.html"));
})

app.get("/name",function(req,res){
    res.send(`<h1>Welcome ${req.query.user}</h1>`)
})

//post method

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"/login.html"));
})

app.use(express.urlencoded({extended:true}));

app.post("/login",function(req,res){
    res.send(`<h1>Welcome ${req.body.user}`);
})

app.listen(4000,function(){
})

// -middleware is built-in function that receives request object and returns
//      the response to the client.
// - it may process the request before returns it to the client and deliver the results 
//      to another middleware -using (next())- and so on untill it reaches to the last middleware to return the response.
//     ** this cycle is called request/response cycle **