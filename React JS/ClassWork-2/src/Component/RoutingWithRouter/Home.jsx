import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Home() {

  const data = useLocation()
  console.log(data?.state?.name);

  const student ="puneet"
  
  return (
    <div>
      <h1>Home</h1>
      <Link to={`/About/${student}`}>Go to About</Link>
      <Link to={"/Contact"}>Go to Contact</Link>
    </div>
  )
}
