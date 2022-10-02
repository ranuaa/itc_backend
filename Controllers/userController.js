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


// Edit user
export const editUser = async(req,res) => {
    const id = req.params.id
    const {_id, password} = req.body
    const userStatus = await userModel.findById(_id)
    const isAdmin = userStatus.isAdmin
    if(id === _id || isAdmin === true){
        try {
            if(password){
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(password, salt)
            }   
                const {_id, ...details} = req.body
                const user = await userModel.findByIdAndUpdate(id, details, {new: true})
                res.status(200).json({
                    message: "data updated",
                    data: user
                })
        
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    }else{
        res.status(400).json({
            message: "Forbiden Access"
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