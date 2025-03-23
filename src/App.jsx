import React from "react"
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Succes from './components/Succes'

function App() {

  return (
    <>
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/succes" element={<Succes />} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
