const path=require('path');
const express=require('express');
const app=express();
app.use(express.static(__dirname + '/public'));
app.get("/",(req,res)=>{
res.send('home');
});

app.listen(8000,()=>{
    console.log('8000');
})