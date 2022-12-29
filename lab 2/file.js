const fs=require('fs');
let productsDB=fs.readFileSync('products.json','utf-8');
console.log(JSON.parse(productsDB));

///////////////////////////

//npm: node package manager 
//    -is a command line tool to install, update or uninstall Node js packages in my application.
//
// npm performs operations locally and globally 
//    -globally: npm performs operations that affecct all the node js applications on the computer.
//          npm install -g
//    -locally: npm performs operations for particular local directory that affects application in that directory only. 
//          npm install

