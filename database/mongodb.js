const mongoose = require('mongoose');
const { MONGO_DB_URI } = process.env;
exports.connect=async ()=>{
    try {
        await mongoose.connect(MONGO_DB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('successfully connected to the mongoDB!');
    } catch (error) {
        console.log('mongoDB connection failed. exiting now...');
        console.error(error.message);
        process.exit(1)
    }

}

