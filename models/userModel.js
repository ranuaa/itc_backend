import mongoose from "mongoose";




const userSchema = mongoose.Schema(
    {
        userName: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email : {
            type: String,
        },
        isAdmin : {
            type: Boolean,
            default: false
        },
        profilePicture: String,
        careerHistory: [],
        adress: {
            type: String
        },
        phone: {
            type: Number
        }
    }
);

const userModel = mongoose.model("Users", userSchema);
export default userModel;