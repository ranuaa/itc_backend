import absensiModel from "../models/absensiModel.js";
import moment from 'moment'

//add new data
export const addAbsensi = async(req,res) => {
    const {userId} = req.body
    // const today = moment().format("DD-MM-YYYY")
    const newData = new absensiModel(req.body)
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    const findData = await absensiModel.find({userId : userId, date: today})
    try {
        if(!findData){
            const data = await newData.save()
            res.status(200).json({
                message: "success",
                data: data
            })
        }else{
            res.json({
                message: "failed",
                data: findData,
            })
            
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}