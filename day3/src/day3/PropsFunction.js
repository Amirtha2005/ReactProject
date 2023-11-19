import React from 'react'

export default function PropsFunction(props) {
  return (
    <div>
      <h1>Hi {props.name} and {props.age}</h1>
    </div>
  )
}
