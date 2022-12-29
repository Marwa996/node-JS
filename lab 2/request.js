const http = require('http');
const fs=require('fs');


const server =http.createServer(function(req,response){
    // response.write("dshfjkds");
    let words=[];

    if(req.url=="/home"){

        response.write("<p><b>welcome to our APIs</b></p>");

    }else if(req.url=="/products"){

        let products=fs.readFileSync("products.json","utf-8");
        response.write(products);     

    }else if(words=req.url.split("/")){
        console.log(words);
        if(words.length == 3){
            const id=words[2];
            let products=fs.readFileSync("products.json","utf-8")
            let prod=JSON.parse(products);
            for(let i=0;i<prod.length;i++){
                if(i==id){
                    response.write(JSON.stringify(prod[i]));
                }
            }
          }
    }else{
        response.write("<h1>ERROR 404</h1>");
    }
    response.end()
}).listen(4000,function(){

});