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

module.exports={ getusers };