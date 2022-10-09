import React from "react";
import { useState } from 'react';
// import './App.css';
import Axios from 'axios';



export default function Create() {
    const[name ,setName] = useState ('')
    const[age, setAge] = useState(0)
    const[sex, setSex] = useState('')

    const[conditions, setConditions] = useState('')
    const[medications, setMedications] = useState('')
    const[contactInfo, setContactInfo] = useState('')
    const [patientsList, setPatientsList] = useState([])
    const addPatientInfo = () =>{
        console.log(name)
        Axios.post('http://localhost:4001/create', {
            name:name,
            age:age,
            sex:sex,
            conditions:conditions,
            medications:medications,
            contactInfo:contactInfo
        }).then ( ()=>{
            console.log('success')
    
            setPatientsList([
                ...patientsList,{
                  name: name,
                  age:age,
                  sex: sex,
                  conditions: conditions,
                  medications: medications,
                  contactInfo: contactInfo
                }
              ])
            
        })
    }

  return (
    <div>
  <div className="App">
      
        
        
      <div className="App-2">
        <label>Name:</label>
        <input
         type="text" 
         onChange={(event) => 
          {setName(event.target.value)}}
         ></input>
        <label>Age:</label>
        <input 
        type="number"
        onChange={(event) => 
          {setAge(event.target.value)}}
        ></input>
        <label>Sex:</label>
        <input 
        type="text"
        onChange={(event) => 
          {setSex(event.target.value)}}
        ></input>
        <label>Conditions:</label>
        <input 
        type="text"
        onChange={(event) => 
          {setConditions(event.target.value)}}
        ></input>
        <label> Medications:</label>
        <input 
        type="text"
        onChange={(event) => 
          {setMedications(event.target.value)}}
        ></input>
        <label>Contact Info:</label>
        <input
         type="text"
         onChange={(event) => 
          {setContactInfo(event.target.value)}}
         ></input>
        {/* <label></label>
        <input type=""></input> */}
        <button onClick={addPatientInfo} >
          Add Patient
          </button>
      </div>

      </div>
    </div>
  )
}
