const express=require("express");
const app=express();
const path=require("path");
const favicon = require('serve-favicon');
const port=3000;

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.get("/welcome", (req,res)=>{
  res.status(200).send("Welcome");
});

// This should be the last route else any after it won't work
app.use("*", (req, res) => {
    res.status(404).json({
      success: "false",
      message: "Page not found",
      error: {
        statusCode: 404,
        message: "You reached a route that is not defined on this server",
      },
    });
  });

app.listen(port,()=>{
console.log(`Express is running on the port ${port
}`);
});