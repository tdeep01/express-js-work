const express=require('express');
const path=require('path');
const templatepath=path.join(__dirname,'/template')
console.log(templatepath);
const app=express();
//view engine set
app.set("view engine","hbs");
//change view dir name
app.set('views',templatepath);
// app.get('/',(req,res)=>{
//     res.render('index',{
//     var1:"abc",
//     var2:"def",
//     var3:"ghi",
//     var4:"ijk"
//     });
// })
app.get("",(req,res)=>{
    res.render("index");
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("*",(req,res)=>{
    res.status(404);
    res.send("error");
})
app.listen(8000,()=>{
    console.log(('8000'));
})