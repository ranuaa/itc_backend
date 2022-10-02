import express from "express";
import { deleteUser, editUser, getAllUser, getUserDetails } from "../Controllers/userController.js";

const router = express.Router()

router.get('/', getAllUser)
router.get('/:id', getUserDetails)
router.put('/:id', editUser)
router.delete('/:id', deleteUser)

export default router