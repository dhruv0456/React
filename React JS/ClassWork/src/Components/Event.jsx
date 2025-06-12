// import React, { usestste } from 'react'

// export default function UseState() {
//     const [count, setCount] = UseState(0);
//     const[name, setName] = UseState("")
//     const updateCount = ()=>{
//         setCount(100)
//         setName("Rahul")
//     }
//   return (
//     <div>
//       <h1>UseState</h1>
//       <h1>{count}</h1>
//       <h1>{name}</h1>
//       <button onClick={updateCount}>Update Count</button>
//     </div>
//   );
// }


import React, { useState } from 'react'

const Event = () => {
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [city, setCity] = useState('')

    const [dark, setDark] =useState(false)

    const [record, setRecord] =useState([])



      const handleClick = ()=> {
        
        let obj ={name,city,subject}
        setRecord([...record,obj])
        setName("")
        setSubject("")
        setCity("")
    }



    return (
    <div className='main' style={{background:dark?'black':'white', color:dark?'white': 'black'}}>
        <h1>Events</h1>
        
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        <input type="text" onChange={(e) => setSubject(e.target.value)} value={subject} />
        <input type="text" onChange={(e) => setCity(e.target.value)} value={city } />
        <button onClick={handleClick}>Submit</button>
        <button onClick={()=> setDark(!dark)}>dark/light</button>


      {
       record.length>0 ?
        record.map((e,i)=>{
          return <ul key={i}>
            <li>{e.name}</li>
            <li>{e.city}</li>
            <li>{e.subject}</li>
          </ul>
        }): <p>No Record</p>
      }

    </div>
  );
}

export default Event
