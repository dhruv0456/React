import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider';
import HimorHer from './Components/HimorHer'
import Card from './Components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Slider/>
      <HimorHer/>
      <Card/>
    </div>
  )
}

export default App
