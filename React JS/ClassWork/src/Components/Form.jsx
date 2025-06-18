import React,{useState} from 'react'

export default function Form() {

    const [formData, setFormData] = useState({})

    const [record, setRecord] = useState([])

    const [image, setImage] = useState()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        const img = URL.createObjectURL(image)
        const form = {...formData,image:img}
        setRecord([...record, form])

        setFormData({
            name : "",
            city : "",
            subject : ""
        })
        setImage(File)
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
      <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>

            <button onClick={handleClick}>Submit</button>

            {
                record.map((e, i) => {
                    return <ul key={i}>
                        <li>{e.name}</li>
                        <li>{e.city}</li>
                        <li>{e.subject}</li>
                        <li><img width="20%" src={e.image} alt="" /></li>

                    </ul>
                })
            }
        </div>
    )
}
