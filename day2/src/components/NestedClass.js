import React, { Component } from 'react'

function Display(){
    return(
        <div>
            <h2>This is a nested class</h2>
        </div>
    )
}

export default class NestedClass extends Component {
  render() {
    return (
      <div>
        <Display/>
      </div>
    )
  }
}


