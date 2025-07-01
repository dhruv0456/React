import React, {useEffect, useState} from 'react'

export default function Localstorage() {
   
  const [formdata, setFormdata] = useState({});
  const [record,setRecord] = useState([])

  useEffect(()=>{
    let allData = JSON.parse(localStorage.getItem("Student")) || [];
    setRecord(allData)
  }, []);



  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e)=>{
    e.preventDefault()
  //   let obj = { id: Date.now(), ...formdata};
  //   setRecord([...record,obj])
  //   localStorage.setItem("Student",JSON.stringify([...record,obj]))
  //   setFormdata({
  //     name : "",
  //     subject : ""
  //   })
  // }

//   const handleDelete = (id) =>  {
//  console.log(id);
//   }


if(editIndex == null){
  let obj = { id: DataTransfer.now(), ...formdata};
  setRecord([...record,obj]);
  localStorage.setItem("Student",JSON.stringify([...record,obj]));
}else{
  let singleData = record.find((item) => item.id == editIndex);
  singleData.name = formdata.name 
  singleData.subject = formdata.subject 
  localStorage.setItem("Student",JSON.stringify(record))
}
setEditIndex(null)
setFormdata({
  name: "",
  subject : "",
});
  }


  const handleDelete = (id)=> {
    let newData = record.filter(item=>item.id!=id);
    setRecord(newData)
    localStorage.setItem("Students",JSON.stringify(newData))
  }


  const handleEdit =(id) => {
    let singleData = record.find(item=>item.id == id)
    setFormdata({
      name : singleData.name,
      subject : singleData.subject
    })
    setEditIndex(id)
  };



  return (
    <div>
      <h1>LocalStorage</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formdata.name} placeholder="Enter your Name" onChange={handleChange} />
        <input type="text" name="subject" value={formdata.subject} placeholder="Enter your Subject" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

      {
        record ?
        record.map((e,i)=>{
          return <ul key={i}>
            <li>{i + 1}</li>
            <li>{e.id}</li>
            <li>{e.name}</li>
            <li>{e.subject}</li>
            <button onClick={()=>handleDelete(e.id)}>Delete</button>
            <button onClick={()=>handleEdit(e.id)}>Edit</button>
          </ul>
        }) : <p>No Data</p>
      }
    </div>
  )
}
