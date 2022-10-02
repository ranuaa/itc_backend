import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'

// Get all user
export const getAllUser = async(req,res) => {
    try {
        const user = await userModel.find()

        res.status(200).json({
            data: user
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}


// get a user
export const getUserDetails = async(req,res) => {
    const id = req.params.id
    try {
        const user = await userModel.findById(id)
        if(user){
            const {password, ...details} = user._doc
            res.status(200).json({
                message: 'User Found',
                data : details
            })
        }else{
            res.status(404).json({
                message: "User not Found"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// Delete User

export const deleteUser = async(req,res) => {
    const id = req.params.id
    try {
        const isAdmin = await userModel.findById(req.body._id)
        if(isAdmin.isAdmin === true){
            await userModel.findByIdAndDelete(id)
            res.status(200).json({
                message: "user Deleted"
            })
        }else{
            res.status(400).json({
                message: "anda tidak mempunyai akses untuk tindakan ini"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}