import mongoose from "mongoose";

const schema = new mongoose.Schema({
    
        name:{
            type:String,
            required:true,
        },
        username:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
        income:[],
        expense:[],
        
});

mongoose.models = {};

export const User = mongoose.model("User", schema);
