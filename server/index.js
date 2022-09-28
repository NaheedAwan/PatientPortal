// const express = require ('express')
// const cors = require ('cors')
// const mysql = require ('mysql')

const express = require('express')

const mysql = require('mysql')
require('dotenv').config()
const PORT = process.env.PORT

const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
const db = mysql.createConnection({
    user: 'sqluser',
    host: 'localhost',
    password:'password',
    database: 'patientportal'
})

app.listen(PORT,() =>{
    console.log("you are connnected to port 4001")
    db.connect(function(err){
        if(err)throw err
        console.log('db connected')
    })
})