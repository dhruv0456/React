// import React from 'react'

// export default function ArrayOfObj() {
    
//     let arr = [
//         {id:1, name: "Rahul", subject: "react"},
//         {id:2, name: "Summit", subject: "node"},
//         {id:3, name: "meet", subject: "css"},
//         {id:4, name: "darshan", subject: "java"},
//         {id:5, name: "aryan", subject: "express"},
//     ]

//   return (

//     <div>
//       <h1>ArrayOFObj</h1>

//       {
//         arr.map((e,i)=>{
//             return <ul>
//                 <li>{e.id}</li>
//                 <li>{e.name}</li>
//                 <li>{e.subject}</li>
//             </ul>
//         })
//       }

//     </div>
//   )
// }



import React from 'react'

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
        {
            arr.map((e,i)=>{
                return  <ArryOfObj id={e.id} name={e.name} Subject={e.Subject}/>
            })
        }
    </div>
  )
}

export default App
