const express = require("express");
const router = express.Router();
const { getusers }=require('../controllers/users');

router.get("/list",getusers);

router.get("/list/:id",function(req,res){
    return res.status(200).json({message:`${req.params.id}`});
});

router.post("/add",function(req,res){
    return res.status(200).json({message:"hi"});
});

router.patch("/update/:id",function(req,res){
    return res.status(200).json({message:"hi"});
});

router.delete("/delete/:id",function(req,res){
    return res.status(200).json({message:"hi"});
});

module.exports=router;
