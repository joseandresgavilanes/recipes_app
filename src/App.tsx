import { useState } from 'react'
import { endpointUrl } from './config'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/shared/header/Header'
import Login from './components/login/Login'
import Register from './components/register/Register'
import { Home } from './components/home/Home'

import './App.css'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
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
