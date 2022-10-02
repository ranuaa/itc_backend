import express from "express";
import { loginUser, registerUser } from "../Controllers/authCotroller.js";

const router = express.Router()

router.get('/', (req,res) => {
    res.send("ookkeeee")
})
router.post('/register', registerUser)
router.post('/login', loginUser)

export default router