import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import AuthRouter from './Routes/AuthRoute.js'
import UserRouter from './Routes/userRoutes.js'
import AbsensiRouter from './Routes/absensiRoute.js'
import AppraisalRouter from './Routes/appraisalRoute.js'



dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors())
app.use(bodyParser.json({limit : "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit : "30mb", extended: true}))

mongoose.connect(process.env.MONGO_DB)
.then(() => app.listen(PORT, () => console.log(`Server is Running On port ${PORT}`)))
.catch((err) => console.log(err))


app.use('/auth', AuthRouter)
app.use('/users', UserRouter)
app.use('/absensi', AbsensiRouter)
app.use('/appraisal', AppraisalRouter)
