import React from "react"
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Route, Routes, HashRouter } from "react-router-dom"
import Succes from './components/Succes'

function App() {

  return (
    <>
    <HashRouter> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/succes" element={<Succes />} />
      </Routes>
    </HashRouter>
    
    </>
  )
}

export default App
