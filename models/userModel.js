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
            required: true
        },
        isAdmin : {
            type: Boolean,
            default: false
        },
        profilePicture: String,
        careerHistory: [],
        adress: String,
        phone: Number
    }
);

const userModel = mongoose.model("Users", userSchema);
export default userModel;