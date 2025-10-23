import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RecipePage from '../Recipe/RecipePage'
import MainPage from '../MainPage/MainPage'
import PageNotFound from './PageNotFound'
import RecipeMainPage from '../RecipeDetails/RecipeMainPage'


const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/recipes' element={<RecipePage/>} />
        <Route path='/RecipeMainPage' element={<RecipeMainPage/>} />
        <Route path='/*' element={<PageNotFound/>} />
      </Routes>
    </div>
  )
}

export default Routing
