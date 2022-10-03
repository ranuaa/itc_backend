import absensiModel from "../models/absensiModel.js";
import moment from 'moment'


//get all data
export const getAllAbsensi = async(req,res) => {
    try {
        const data = await absensiModel.find()
        res.status(200).json({
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//get a data 
export const getSingleAbsensi = async(req,res) =>{
    const userId = req.params.id
    try {
        const data = await absensiModel.find({userId})
        res.status(200).json({
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
    try {
        
    } catch (error) {
        
    }
}

//add new data
export const addAbsensi = async(req,res) => {
    const newData = new absensiModel(req.body)
    try {
        const data = await newData.save()
        res.status(200).json({
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//edit data
export const editAbsensi = async(req,res) => {
    const id = req.params.id
    const {_id, userId, ...details} = req.body
    try {
        const updateUser = await absensiModel.findByIdAndUpdate(id, details, {new : true})
        res.status(200).json({
            data: updateUser
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const deleteAbsensi = async(req,res) => {
    const id = req.params.id
    try {
        const data = await absensiModel.findByIdAndDelete(id)
        res.status(200).json({
            message: "success delete data"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}