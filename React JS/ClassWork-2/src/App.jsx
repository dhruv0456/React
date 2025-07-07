import React from 'react'
import { BrowserRouter, Route, Router, Routes  } from "react-router-dom";
import Home from './Component/RoutingWithRouter/Home';
import About from './Component/RoutingWithRouter/About';
import Contact from './Component/RoutingWithRouter/Contact';
import Display from './CrudWithRouting/Display';
import Create from './CrudWithRouting/Create';

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Display/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}
