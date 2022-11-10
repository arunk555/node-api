const express=require("express");
const app=express();
const port=3000;

app.get("/welcome", (req,res)=>{
  res.status(200).send("Welcome");
});

app.listen(port,()=>{
console.log(`Express is running on the port ${port
}`);
});