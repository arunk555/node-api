const express = require("express");
const router = express.Router();
const { getusers, getUsersById, add, updateuser, deleteuser }=require('../controllers/users');

router.get("/list",getusers);

router.get("/list/:id", getUsersById, function(req,res){
    return res.status(200).json(res.userdata);
});

router.post("/add", add);

router.patch("/update/:id", getUsersById, updateuser);

router.delete("/delete/:id", getUsersById, deleteuser);

module.exports=router;
