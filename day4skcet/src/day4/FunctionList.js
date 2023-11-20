import React from 'react'
export default function List(){
    const fruits=["apple","mango","orange"];
    const display=fruits.map((name)=>{return <li>{name}</li>})
    return(
        <>
        <ul type="square">{display}</ul>
        </>
    )
}