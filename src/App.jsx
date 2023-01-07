import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from './Detail'
import './index.css'
import Meals from './Meals'
import Nav from './Nav'

const App = () => {
  return (
      <BrowserRouter>
        <div className='container mx-auto'>
        
          <Nav/>
        
          <Routes>
            <Route path='/' element={<Meals/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
          </Routes>
        </div> 
        
      </BrowserRouter>
  )
}

export default App