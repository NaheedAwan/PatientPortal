import React from "react";
import { useState } from 'react';
// import './App.css';
import Axios from 'axios';



export default function Create() {
  return (
    <div>
  <div className="App">
      
        
        
      <div className="App-2">
        <label>Name:</label>
        <input
         type="text" 
        //  onChange={(event) => 
        //   {setName(event.target.value)}}
         ></input>
        <label>Age:</label>
        <input 
        type="number"
        // onChange={(event) => 
        //   {setAge(event.target.value)}}
        ></input>
        <label>Sex:</label>
        <input 
        type="text"
        // onChange={(event) => 
        //   {setSex(event.target.value)}}
        ></input>
        <label>Condition:</label>
        <input 
        type="text"
        // onChange={(event) => 
        //   {setPosition(event.target.value)}}
        ></input>
        <label>Current Medication:</label>
        <input 
        type="Number"
        // onChange={(event) => 
        //   {setSalary(event.target.value)}}
        ></input>
        <label>Address:</label>
        <input
         type="text"
        //  onChange={(event) => 
        //   {setCountry(event.target.value)}}
         ></input>
        {/* <label></label>
        <input type=""></input> */}
        <button >
          Add Employee
          </button>
      </div>

      </div>
    </div>
  )
}
