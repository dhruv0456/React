import { useState } from 'react'
import './App.css'
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'
import ArryOfObj from './Components/ArrayOfObj'
import UseState from './Components/UseState'



// function App() {

//   return (
//     <>
//     <Navbar/>
//     <Footer/>
//     <ArrayOfObj/>
//     </>
//   )
// }


// export default App



const App = () => {

  const arr =[
        { id : 1, name : "Dhruv", Subject : "React"}, 
        { id : 2, name : "Darshan", Subject : "html"}, 
        { id : 3, name : "Meet", Subject : "Java"}, 
        { id : 4, name : "Aryan", Subject : "React"}, 
        { id : 5, name : "Dev", Subject : "React"}, 
    ]

  return (
    <div>
      <ArryOfObj data={arr}/>
      <UseState/>
    </div>
  )
}

export default App
