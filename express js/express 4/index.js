const express=require('express');
const path=require('path');
const app=express();
const hbs=require('hbs');
const partialpath=path.join(__dirname,'/views/partials');
hbs.registerPartials(partialpath);
//to include static file like html css
app.use(express.static('public'));
app.set("view engine","hbs");
app.get("",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.listen(8000,()=>{
    console.log('8000');
})
//nodemon index.js -e js,hbs for all changes accomodate by nodemon on extension files including js,hbs
