

const express = require('express')
const db = require ('./database')
require('dotenv').config()
const PORT = process.env.PORT
const cors = require('cors')

// ==============================================================================================================================================================


const app = express()
app.use(cors())
app.use(express.json())

// ====================================================================================================================================================


app.listen(PORT,() =>{
    console.log("you are connnected to port 4001")
    db.connect(function(err){
        if(err)throw err
        console.log('db connected')
    })
})