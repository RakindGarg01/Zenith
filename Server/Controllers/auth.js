import  jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import users from '../models/auth.js'
export const signup = async (req,res)=>{
    const {name , email , password } = req.body;
    try {
        const Existing_User = await users.findOne({email});
        if(Existing_User){
            
            return res.status(404).json({message : "User Already Exists."})
        }
        const hashed_Password = await bcrypt.hash(password , 12)
        const newUser = await users.create({name , email , password : hashed_Password})
        const token = jwt.sign({email : newUser.email , id : newUser._id} , "test" , {expiresIn : '1h'});
        res.status(200).json({result : newUser , token})
    } catch (error) {
        res.status(500).send("Error while Signing Up")
    }
}

export const login = async (req,res)=>{
    const {email , password} = req.body;
    try {
        const existingUser = await users.findOne({email});
        if(!existingUser){
            return res.status(404).json({message : "User Don't Exists"})
        }

        const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);

        if(!isPasswordCorrect){
            return res.status(400).json({message : "Invalid UserName or Password"})
        }

        const token = jwt.sign({email:existingUser.email, id:existingUser._id},"test",{expiresIn : '1h'});
        res.status(200).json({result:existingUser, token})
    } catch (error) {
        res.status(500).json("Session Expired!! Please LogIn Again..")
    }
}