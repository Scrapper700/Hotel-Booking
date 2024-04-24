const router=require("express").Router()
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const multer=require("multer")

const User=require("../models/User")

/* Configuration multer for the file upload */
const storage=multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, "public/uploads") //store uploaded files in the 'uploads' folder
    },
    filename:function( req, file, cb){
        cb(null, file.originalname)
    }
})

const upload=multer({ storage })

/*User Register*/
router.post("/register", upload.single('profileImage'),async(req,res)=>{
    try{
        /*Take all infotmation from the form*/
        const{firstName, lastName, email, password}=req.body
        
        /*The uploaded file is available as req.file*/
        const profileImage=req.file 
        
        if(!profileImage) {
            return res.status(400).send("No file uploaded")
        }

        //path to the uploaded profile photo

        const ProfileImagePath=profileImage.path

        //checking if user exist

        const existingUser=await User.findOne ({ email })
        if(existingUser){
            return res.status(409).json({message:"User already exist"})
        }

        /*Has the password */
        const salt=await bcrypt.genSalt()
        const hashPassword=await bcrypt.hash(password,salt)

        /*create a new user*/
        const newUser=new User ({
            firstName,
            lastName,
            email,
            password:hashedPassword,
            ProfileImagePath
        })

        await newUser.save()

        /*send a successfull message*/
        res.status(200).json({ message: "User registered successfully!", user: newUser })
    } catch(err){
        console.log(err)
        res.status(500).json({ message: "Registration failed!", error: err.message})
    }
})

module.exports=router