import express from "express";
import { loginUser, registerUser } from "../Controllers/authCotroller.js";
import moment from 'moment'

const router = express.Router()


router.post('/register', registerUser)
router.post('/login', loginUser)

export default router