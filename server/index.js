

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
app.post('/create', (req,res) => {
    const name = req.body.name
    const age = req.body.age
    const sex = req.body.sex
    const conditions = req.body.conditions
    const medications = req.body.medications
    const contactInfo= req.body.contactInfo

    db.query('INSERT INTO patientinfo (name, age, sex, conditions, medications, contactInfo) VALUES(?,?,?,?,?,?)', 
    [name, age, sex, conditions, medications, contactInfo],
    (err, result) => {
        if (err) {
            console.log(err)
        } else{
            res.send("values inserted")
        }
    }
    )
})

// ===============================================================================================================================================

app.get('/display', (req, res) => {
    db.query('SELECT * FROM patientinfo' , (err, result) => {
        if(err) {
            console.log(err) 
        } else {
            res.json( result )
        }
    })
})




// =================================================================================================================================================

app.listen(PORT,() =>{
    console.log("you are connnected to port 4001")
    db.connect(function(err){
        if(err)throw err
        console.log('db connected')
    })
})