import express from "express";
import { deleteUser, getAllUser, getUserDetails } from "../Controllers/userController.js";

const router = express.Router()

router.get('/', getAllUser)
router.get('/:id', getUserDetails)
router.delete('/:id', deleteUser)

export default router