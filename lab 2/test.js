let name="localhost:4000/products/2"
let words=[];

let products=[
    {"name":"p1","color":"red","price":100}, 
    {"name":"p2","color":"blue","price":200}, 
    {"name":"p3","color":"black","price":300}
] 

if(words=name.split("/")){
  if(words.length == 3){
    const id=words[2];
    for(let i=0;i<products.length;i++){
                console.log(i);
                if(i == id){
                    // console.log(words[2])
                    console.log(products[i]);
                }
            }
          }
}