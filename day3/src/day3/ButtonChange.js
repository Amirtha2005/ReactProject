import React, { useState } from 'react'

export default function ButtonChange() {
    const [name, setName]=useState("Earn");

    function handleNameChange(){
        const names=["Earn","grow","give"]
        const int=Math.floor(Math.random()*3);
        setName(names[int]);
    }
    
  return (
    <div>
      <p>Let's {name} Money </p>
      <button onClick={handleNameChange}>Subscribe</button>
    </div>
  )
}
