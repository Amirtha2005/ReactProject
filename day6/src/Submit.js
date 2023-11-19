import React,{useState} from 'react'

export default function Submit() {
    const[name,setName]=useState('');

    const[submitname, setSubmitname]=useState([]);

    const handleChange=(event)=>{
        setName(event.target.value);
    }

    const handleButtonChange=()=>{ 
        setSubmitname([...submitname, name]);
        setName('');
    }

  return (
    <div>
      <input type="text" value={name} placeholder="TYPE" onChange={handleChange}></input>
      <button onClick={handleButtonChange}>SUBMIT</button>
      <p>{submitname}</p>
      <div>
        {submitname.map((value,index)=>(
            <p key={index}>{value}</p>
        ))}
      </div>
    </div>
  )
}
