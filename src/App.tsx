import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/shared/header/Header'

import './App.css'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/profile' element={'hola'} />
        <Route path='/my-recipes' />
        <Route path='/favorites' />
        <Route path='/supermarket-list' />
        <Route path='/menu-planner' />
      </Routes>
    </div>
  )
}

export default App
