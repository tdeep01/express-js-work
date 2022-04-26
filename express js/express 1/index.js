const express=require('express')
const app=express();

app.get('/',(req,res)=>{
// res.status(200).res.send("home");
//or
res.write("home");//to write
res.end();//con close
});

app.get('/api',(req,res)=>{
// res.send({
//     name:"tarandeep",
//     age:22
// });
res.json({
    name:"tarandeep",
    age:22
});
});
app.listen(8000,()=>{
    console.log('8000');
})