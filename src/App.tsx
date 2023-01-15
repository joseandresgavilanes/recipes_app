import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Header } from './components/shared/header/Header'
import Login from './components/login/Login'
import Register from './components/register/Register'
import { Home } from './components/home/Home'
import { getUser } from './store/slices/user.slice'
import { AppDispatch } from './store'

import './App.css'
import { Footer } from './components/shared/footer/footer'
import { Favorites } from './components/favorites/Favorites'
import RecipeDetails from './components/recipeDetails/recipeDetails'

function App() {
  const dispatch: AppDispatch = useDispatch()
  useEffect(()=> {
    dispatch(getUser())
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={'hola'} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/my-recipes' />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/upload-recipe' />
        <Route path='/supermarket-list' />
        <Route path='/menu-planner' />

        <Route path='/recipes' element={<RecipeDetails />} >
          <Route path=':id' />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App