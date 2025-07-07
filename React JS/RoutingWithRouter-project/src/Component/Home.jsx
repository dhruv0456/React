// Home.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom'

function Home() {

  
  const data = useLocation()
  console.log(data?.state?.name);

  const student ="puneet"

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>This is the main page of our application.</p>
      <Link to={`/Vehicles/${student}`}>Go to Vehicles Info.</Link>
      <Link to={"/Company"}>Go to Company Info.</Link>
    </div>
  );
}

export default Home;