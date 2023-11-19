import React, { useState } from 'react'

export default function Parent() {

    const[college,setCollege]=useState("playing")
    const[hobby,setHobby]=useState("travelling")
  
    return (
      <div>
        <h1>my hobby is {college} and {hobby}</h1>
        <button onClick={()=>setCollege("drawing") }>Click me</button>
        <button onClick={()=>setHobby("night travel") }>Clickkk</button>
        
      </div>
    )
  
}
