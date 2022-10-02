import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";


// register new user

export const registerUser = async(req,res) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    req.body.password = hashedPassword
    const newUser = new userModel(req.body);
    const {userName} = req.body

    try {
        
        const oldUser = await userModel.findOne({userName})

        if(oldUser){
            res.status(400).json({
                message: "User telah terdaftar di database"
            })
        }else{
                    const user = await newUser.save()
                    const token = jwt.sign({
                        userName: user.userName,
                        id: user._id
                    }, process.env.JWT_KEY)
                    res.status(200).json({
                        message: 'succeed',
                        data: newUser,
                        token: token
                    })
        }

    } catch (error) {
        res.status(400).json(error.message)
    }
}

// Login User

export const loginUser = async(req,res) => {
    const {email, password} = req.body;

    try {
        const user = await userModel.findOne({email : email})

        if(user){
            const valid = await bcrypt.compare(password, user.password)
            if(!valid){
                res.status(400).json({message: "password salah bosskuh"})
            }else{
                const token = jwt.sign({
                    userName : user.userName,
                    id: user._id
                }, process.env.JWT_KEY)
                res.status(200).json({
                    message: "success login",
                    data: user,
                    token: token
                })
            }
        }else{
            res.status(404).json({
                message: "User not found"
            })
        }
    } catch (error) {
        res.status(401).json(error.message)
    }
}