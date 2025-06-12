import React, {useState} from 'react'

export default function Events() {

    const [name,setName]=useState("")
    const [subject,setSubject]=useState("")
    const [city,setCity]=useState("")

    // const handleClick =()=>{
    //     console.log("hello");
    // }
    // const handleChange=(e)=>{
    //     console.log(e.target.value);
        
    // }
  return (
    <div>
      <h1>Events</h1>
      {/* <h2>{name}</h2>
      <h2>{subject}</h2>
      <h2>{city}</h2> */}
      <input type="text" onChange={(e)=>handleChange(e)}/>
      <input type="text" onChange={(e)=>setName(e.target.value)}/>
      <input type="text" onChange={(e)=>setSubject(e.target.value)}/>
      <input type="text" onChange={(e)=>setCity(e.target.value)}/>
      <button onClick={handleClick}>Submit</button>

{/*      
       {
        Record.map((e,i)=>{
          return <ul key={i}>
            <li>{e.name}</li>
            <li>{e.city}</li>
            <li>{e.subject}</li>
          </ul>
        })
        } */}


        
       {
        Record.length>0 ?
        Record.map((e,i)=>{
          return <ul key={i}>
            <li>{e.name}</li>
            <li>{e.city}</li>
            <li>{e.subject}</li>
          </ul>
        })  : <p>No record</p>
        }





        


    </div>
  );
}
