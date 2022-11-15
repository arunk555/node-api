const { Schema, model}=require("mongoose");
const customerSchema=new Schema({
    name:{
        type:String,
        required: true,
        default: null
    },
    email:{
        type: String,
        unique: true,
        default: null,
        required: true
    },
    age:{
       type: Number,
       default: null
    },
    createdAt:{
        type: Date,
        immutable: true,
        default:()=>Date.now()
    },
    updatedAt:{
        type: Date,
        immutable: true,
        default:()=>Date.now()
    }
});

module.exports=model("customer", customerSchema);


