
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Home from './components/Home'
import Create from './components/Create'
import Header from './components/Header'
import  Display  from './components/Display'

function App() {
  


  return (
    <div className="App ">
      <Router>
      <Header />
        <div className="fill-page">
          
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path ="/create" element = {<Create/>}/>
              <Route path = "/display" element = {<Display/>}/>
            
            </Routes>
          
        </div>
        
      </Router>
    </div>
  )
}

export default App