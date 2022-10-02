import express from 'express'
import { addAbsensi } from '../Controllers/absensiController.js'
import moment from 'moment'
import absensiModel from '../models/absensiModel.js'

const router = express.Router()

router.post('/', addAbsensi)


export default router