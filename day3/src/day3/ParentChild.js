import React from 'react'

export default function ParentChild() {
  return (
    <div>
      Parent
      <Child name="Amir"></Child>
    </div>
  )
}
function Child(props){
    return(
        <div>
            <h1>My name is {props.name}</h1>
        </div>
    )
}
