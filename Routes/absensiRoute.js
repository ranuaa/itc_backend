import express from 'express'
import { addAbsensi, deleteAbsensi, editAbsensi, getAllAbsensi, getSingleAbsensi } from '../Controllers/absensiController.js'
import moment from 'moment'
import absensiModel from '../models/absensiModel.js'

const router = express.Router()

router.get('/', getAllAbsensi)
router.get('/:id', getSingleAbsensi)
router.post('/', addAbsensi)
router.put('/:id', editAbsensi)
router.delete('/:id', deleteAbsensi)


export default router