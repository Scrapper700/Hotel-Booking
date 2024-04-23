const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
        },

        lastName:{
            type:String,
            required:true,
        },

        Email:{
            type:String,
            required:true,
            unique:true,
        },

        password:{
            type:String,
            required:true,
        },

        ProfileImagePath:{
            type:String,
            required:true,
            default:"",
        },

        tripList:{}
    }
)