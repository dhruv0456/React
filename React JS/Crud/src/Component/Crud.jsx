import React, { useState } from 'react'

export default function Crud() {

const [name, setName] = useState('')
const [subject, setSubject] = useState('')
const [course, setCourse] = useState('')

const [record, setRecord] = useState([])

const handleSubmit = () => {
  let obj = {id: Date.now(),name,subject,course}
  setRecord([...record,obj])



}


  return (
    <div>

        <h1>Crud</h1>
        <form>

            <input type="text" placeholder='Enter your Name' onChange={(e)=> setName(e.target.value)} />
            <input type="text" placeholder='Enter your Subject' onChange={(e)=> setSubject(e.target.value)} />
            <input type="text" placeholder='Enter your Course' onChange={(e)=> setCourse(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>

        </form>

        {
            record.map((e,i)=> {
                return <ul key={i}>
                    <li>{e.name}</li>
                    <li>{e.subject}</li>
                    <li>{e.course}</li>
                </ul>
            })
        }
      
    </div>

  )
}
