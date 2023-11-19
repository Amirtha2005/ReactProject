import React from 'react'
const d={color:'blue',background:'orange'}
function Display(){
    return (
        <div>
            <h1 style={d}>Nested component </h1>
        </div>
    )
}

export default function NestedComponent(){
    return(
        <div>
            <Display/>
        </div>
    )
}