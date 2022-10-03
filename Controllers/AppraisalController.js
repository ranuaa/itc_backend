import appraisalModel from "../models/appraisalModel.js";


//get all apraisal 
export const getAllAppraisal = async(req,res) => {
    try {
        const data = await appraisalModel.find()
        res.status(200).json({
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//add new appraisal
export const addNewAppraisal = async(req,res) => {
    const newAppraisal = new appraisalModel(req.body)
    try {
        const data = await newAppraisal.save()
        res.status(200).json({
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//get single appraisal
export const getSingleAppraisal = async(req,res) => {
    const id = req.params.id
    try {
        const data = await appraisalModel.findById(id)
        res.status(200).json({
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//edit appraisal
export const editAppraisal = async(req,res) => {
    const id = req.params.id
    const {_id, ...details} = req.body
    try {
        const  data = await appraisalModel.findByIdAndUpdate(id, details, {new: true})
        res.status(200).json({
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//delete appraisal
export const deleteAppraisal = async(req,res) => {
    const id = req.params.id
    try {
        await appraisalModel.findByIdAndDelete(id)
        res.status(200).json({
            message: "data deleted"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}