import React from 'react'
import { useState } from 'react';
// import Create from './Create';
import Axios from 'axios';


export default function Display () {
  


// const[name ,setName] = useState ('')
// const[age, setAge] = useState(0)
// const[sex, setSex] = useState('')

// const[conditions, setConditions] = useState('')
// const[medications, setMedications] = useState('')
// const[contactInfo, setContactInfo] = useState('')

const [patientsList, setPatientsList] = useState([])

// const addPatientInfo = () =>{
//     console.log(name)
//     Axios.post('http://localhost:4001/create', {
//         name:name,
//         age:age,
//         sex:sex,
//         conditions:conditions,
//         medications:medications,
//         contactInfo:contactInfo
//     }).then ( ()=>{
//         console.log('success')

//         setPatientsList([
//             ...patientsList,{
//               name: name,
//               age:age,
//               sex: sex,
//               conditions: conditions,
//               medications: medications,
//               contactInfo: contactInfo
//             }
//           ])
        
//     })
// }


const getPatients =( ) =>{
    Axios.get('http://localhost:4001/display') .then((response) =>{
        setPatientsList(response.data)
    })

}


  return (
    <div className='patients'>
<button onClick={getPatients}> Show Patients </button>

{patientsList.map ((val, key) =>{
return <div className='div'><div className='patient'>
<h3>Name : {val.name}</h3>
<h3>Age : {val.age}</h3>
<h3>Sex : {val.sex}</h3>
<h3>Conditions : {val.conditions}</h3>
<h3>medications : {val.medications}</h3>
<h3>Contact Info : {val.contactInfo}</h3>
</div></div>
})}
</div>

  )
}
