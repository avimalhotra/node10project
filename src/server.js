const express=require('express');
const app=express();
const dotenv=require("dotenv").config();
const path=require('path');
const nunjucks=require('nunjucks');

nunjucks.configure(path.resolve(__dirname,'public/views'),{
    express:app,
    autoscape:true,
    noCache:false,
    watch:true
}); 


app.use(express.static('src/public'));


app.get("/",(req,res)=>{
    res.status(200).render("home.html",{})
});


app.listen(process.env.PORT,()=>{
    console.log(`Express server running at http://127.0.0.1:${process.env.PORT}`);
})
