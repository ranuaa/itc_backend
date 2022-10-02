import mongoose from "mongoose";


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

const absensiSchema = mongoose.Schema(
    {
        userName: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        date: {
            type: String,
            default: today
        },
        userId : {
            type: String,
            required: true
        }
    }
)

const absensiModel = mongoose.model("Absensi", absensiSchema);
export default absensiModel