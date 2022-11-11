import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { Login } from '../Components/Login'
import { LandingPage } from '../Pages/LandingPage'
export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LandingPage/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
    </div>
  )
}
