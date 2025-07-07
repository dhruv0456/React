// Vehicle.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom'




function Vehicle() {
  
  const navigate =useNavigate()

  const student = useParams()
  console.log(student);
  
  const handleBtn = ()=> {
    navigate("/",{replace : true, state:{name:"rahul"} })
  }
  return (
    <div>
      <h1>Our Vehicles</h1>
      <p>Explore our wide range of vehicles.</p>
      <button onClick={handleBtn}>Go To Home</button>
    </div>
  );
}

export default Vehicle;