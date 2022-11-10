const express=require("express");
const app=express();
const path=require("path");
const favicon = require('serve-favicon');
const port=3000;

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.get("/welcome", (req,res)=>{
  res.status(200).send("Welcome");
});

app.listen(port,()=>{
console.log(`Express is running on the port ${port
}`);
});