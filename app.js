const express= require("express");
const app=express();
app.get('/',(req,res)=>{
    res.send(`this is a home page`);
});app.get('/notepad',(req,res)=>{
    res.send(`this is a notepad page`);
    // res.send(notetakingApp/index.html);
});
app.listen(80,()=>{
    console.log("checking the listen command");
});