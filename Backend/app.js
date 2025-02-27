const { configDotenv } = require("dotenv")
const express = require('express')
const cors = require('cors');
const {readdirSync} = require('fs')  //file system module
const { db } = require("./db/db");

const app = express()
require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

// app.get('/',(req, res)=> {
//     res.send('Hello world')
// })

//routes
readdirSync('./routes').map((route) => app.use('/api/v1/',require('./routes/' + route)))

const server = () => {
    db()
    app.listen(PORT,() =>{
        console.log("Server is running on port: " ,PORT)
    })
}

server()