import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Dashboard from './Components/Dashboard/Dashboard'
const AllRoutes = () => {
    return (
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Auth' element={<Auth/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
      </Routes>
    )
  }
  
  export default AllRoutes 