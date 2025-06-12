import React,{useState} from 'react'

export default function Form() {

    const [formData, setFormData] = useState({})

    const [record, setRecord] = useState([])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        setRecord([...record, formData])
    }
    return (
        <div>
            <h1>Form</h1>
            <input
                type="text"
                name="name"
                placeholder="enter your name"
                onChange={handleChange}
      />

            <input
                type="text"
                name="city"
                placeholder="enter your city"
                onChange={handleChange}
      />

            <input
                type="text"
                name="subject"
                placeholder="enter your subject"
                   onChange={handleChange}

      />

            <button onClick={handleClick}>Submit</button>

            {
                record.map((e, i) => {
                    return <ul key={i}>
                        <li>{e.name}</li>
                        <li>{e.city}</li>
                        <li>{e.subject}</li>

                    </ul>
                })
            }
        </div>
    )
}
