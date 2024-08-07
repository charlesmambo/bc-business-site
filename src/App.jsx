import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'

function App() {

  return (
    <div className='App'>
       <div className="header">
         <Navbar />
         <Header />
       </div>
    </div>
  )
}

export default App
