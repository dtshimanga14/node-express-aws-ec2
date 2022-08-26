const express = require("express");
const app = express();  
const port = 3000;

app.get('/',(req,res) => {
    res.send('<h1>Express Demo App </h1>'+ 
        '<h4>Message : Success </h4> '
        + '<p> Version 1.0 </p>');
}).get('/products',(req,res) => {
    res.json([ 
        {  productId : '101',  price : 150  },
        {  productId : '102',  price : 134 }
    ]);
}).listen(port,()=> {
    console.log(`Demo is up and listening to port : ${port}`);
})