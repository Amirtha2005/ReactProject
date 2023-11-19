import React from 'react'

export default function DefaultPropsEx(props){
    return(
        <div>
            <h1>my name is {props.name} and i'm studying at {props.college}</h1>
        </div>
    )
}

DefaultPropsEx.defaultProps={
    name : "Amir",
    college: "SKCET"
}
