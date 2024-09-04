import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import NavBar from './components/NavBar/NavBar'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
      <div>
  <NavBar/>
  <HomePage/>
      </div>
     
    </>
  )
}

export default App
