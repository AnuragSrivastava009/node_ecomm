require('dotenv').config()

const db = require("./src/config/database")
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const jsonwebtoken = require('jsonwebtoken') 
const cors = require('cors')
const route = require('./src/routes/routes')
const authRoutes = require('./src/routes/authRoutes')

app.use(cors())
app.use(bodyParser.json())// this is use to parsing json data which is commitng from request
console.log("abccc",process.env.port);

db()

app.use("/api/v1/auth",authRoutes)
// app.use("/api",route)
app.listen(process.env.port || 5000,() =>{
    console.log("listen on port"+process.env.port);
})