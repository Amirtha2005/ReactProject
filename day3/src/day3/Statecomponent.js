import React, { Component } from 'react'

export default class Statecomponent extends Component {

    state={name: "Devil", place: "Hell"}
 
    changeCollege=()=>{this.setState({name:"Angel"})}

    render() {
        return (
            <div>
        <h1>I am a {this.state.name} at {this.state.place}</h1>
        <button onClick={this.changeCollege}>Click me</button>
      </div>
    ) 
}
}
//another method //<button onClick={()=>{this.setState({name:"Atria"})}}>Click me</button>
//state can be modified but props cannot be modified