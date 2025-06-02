import React, { usestste } from 'react'

export default function UseState() {
    const [count, setCount] = UseState(0);
    const[name, setName] = UseState("")
    const updateCount = ()=>{
        setCount(100)
        setName("Rahul")
    }
  return (
    <div>
      <h1>UseState</h1>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <button onClick={updateCount}>Update Count</button>
    </div>
  );
}
