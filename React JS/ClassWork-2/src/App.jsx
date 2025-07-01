import React from 'react'
import { BrowserRouter, Route, Router, Routes  } from "react-router-dom";
import Home from './Component/RoutingWithRouter/Home';
import About from './Component/RoutingWithRouter/About';
import Contact from './Component/RoutingWithRouter/Contact';

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about/:id' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}
