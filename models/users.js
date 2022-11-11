const { Schema, model}=require('mongoose');
const userSchema=new Schema({
    name: {
        type: String,
        default: null,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    age:{
        type: Number,
        default: null,
    },
    createdAt:{
        type: Date,
        default:()=>Date.now(),
        immutable:true
    },
    updatedAt:{
        type: Date,
        default:()=>Date.now(),
        immutable:true
    }
});

module.exports = model('users', userSchema);