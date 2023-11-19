import React, { useState } from 'react'

export default function CountFunction() {

    const [count, setCount]=useState(99);

    function incrementFunction(){
        setCount(count+1)
    }
    function decrementFunction(){
        setCount(count-1)
    }
  return (
    <div>
      <button onMouseOver={decrementFunction}>-</button>
      <h1>{count}</h1>
      <button onMouseOver={incrementFunction}>+</button>
    </div>
  )
}
