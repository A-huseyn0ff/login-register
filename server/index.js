import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from "mongoose";
import UserRoute from './Routes/User.js'
const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()
app.use('/users',UserRoute)
const PORT = process.env.PORT;
mongoose.connect('mongodb+srv://akif:akif123@atlascluster.8zpslq0.mongodb.net');
app.listen(PORT,()=>{
    console.log('Serverimize xos geldiniz');
})