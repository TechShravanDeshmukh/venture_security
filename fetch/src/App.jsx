import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Fetch from './Fetch'
import './App.css'
import { Router } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Application/Mainpage/Landing'
import Goair from './Application/Subpages/Goair'
import Zomato from './Application/Subpages/Zomato'
import BajajEnergy from './Application/Subpages/BajajEnergy';
import Bujus from './Application/Subpages/Bujus'
import Honda from './Application/Subpages/Honda'
import Hyundai from './Application/Subpages/Hyundai'
import Ola from './Application/Subpages/Ola'
import Oyo from './Application/Subpages/Oyo'
import Scaler from './Application/Subpages/Scaler'
import Suzuki from './Application/Subpages/Suzuki'
import BookMyShow from './Application/Subpages/BookMyShow';

function App() {
  
  return (
    <>
      <div>
        <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/1" element={<Goair />} />
        <Route path="/2" element={<Zomato />} />
        <Route path="/3" element={<BajajEnergy />} />
        <Route path="/4" element={<Bujus />} />
        <Route path="/5" element={<Honda />} />
        <Route path="/6" element={<Hyundai />} />
        <Route path="/7" element={<Ola />} />
        <Route path="/8" element={<Oyo />} />
        <Route path="/9" element={<Scaler />} />
        <Route path="/10" element={<Suzuki />} />
        <Route path="/BMS" element={<BookMyShow />} />
      </Routes>

      </BrowserRouter>
    
        
      </div>
      
    </>
  )
}

export default App
