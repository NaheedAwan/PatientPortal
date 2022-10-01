
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Home from './components/Home'

import Header from './components/Header'

function App() {
  // const [flights, setFlights] = useState('')
  // const [selectedFlight, setSelectedFlight] = useState('')

  return (
    <div className="App ">
      <Router>
      <Header />
        <div className="fill-page">
          
          
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/results" element={<Results />} />
              <Route path="/book-flight" element={<BookFlight />} />
              <Route path="/reservation/:id" element={<Reservation />} /> */}
              {/* <Route path="/reservation/*" element={<Reservation />} /> */}
            </Routes>
          
        </div>
        
      </Router>
    </div>
  )
}

export default App