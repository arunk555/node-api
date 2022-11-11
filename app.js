require("dotenv").config();
const express=require('express');
const app=express();
const user_routes=require('./routes/users');
require('./database/mongodb').connect();

app.use(express.json());

app.use("/user", user_routes);




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

module.exports=app;