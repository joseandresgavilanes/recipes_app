import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/shared/header/Header'

import './App.css'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/profile' element={'hola'} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/my-recipes' />
        <Route path='/favorites' />
        <Route path='/upload-recipe' />
        <Route path='/supermarket-list' />
        <Route path='/menu-planner' />
      </Routes>
    </div>
  )
}

export default App
