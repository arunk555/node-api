const Users=require('../models/users');
const getusers=async (req,res) => {
    try {
        const users=await Users.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({
            success: "false",
            error: {
              statusCode: 500,
              message: error.message,
            },
          });
    }
};

const getUsersById= async (req,res,next)=>{
   let userdata;
   const uid=req.params.id;
   if(uid){
      try {
        userdata= await Users.findById(uid);
      } catch (error) {
        return res.status(500).json({
          success: "false",
          error: {
            statusCode: 500,
            message: error.message,
          },
        });
      }
   } 
   res.userdata = userdata;
   console.log(res.userdata);
   next();
};

const add = async (req,res)=>{
  console.log(req.body);
 const { name, email, age } = req.body;
 if(!name && !email){
  return res.status(400).json({
    success: "false",
    error: {
      statusCode: 400,
      message: 'Mandatory fields are missing!',
    },
  });
 }
 const user= new Users({ name, email, age });
 try {
  const newuser=await user.save();
  return res.status(201).json(newuser);
 } catch (error) {
    return res.status(400).json({
      success: "false",
      error: {
        statusCode: 400,
        message: error.message,
      },
    });
 }
};

const updateuser= async (req, res)=>{
  if(req.body.name){
    res.userdata.name=req.body.name;
  }

  if(req.body.email){
    res.userdata.name=req.body.email;
  }
  if(req.body.hasOwnProperty('age')){
    res.userdata.age=req.body.age;
  }

  try {
    const uptuser=await res.userdata.save();
    return res.status(201).json(uptuser);
  } catch (error) {
    return res.status(400).json({
      success: "false",
      error: {
        statusCode: 400,
        message: error.message,
      },
    });
  }

};

const deleteuser = async (req,res)=>{
  try {
    console.log(res.userdata);
    await res.userdata.remove();
    return res.status(200).json({message: "Deleted user!"});
  } catch (error) {
    return res.status(400).json({
      success: "false",
      error: {
        statusCode: 500,
        message: error.message,
      },
    });
  }

};

module.exports={ getusers, getUsersById, add, updateuser, deleteuser };