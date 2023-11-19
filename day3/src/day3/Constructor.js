import React, { Component } from 'react'

export default class Constructor extends Component {
 constructor(){
    super();
    this.state={name: "Humans" , place:"outerspace"}
 }

changeCollege=()=>{this.setState({place:"Mars"})}

render ()
{
    return(
        <div>
            <h1>Find out where the alien is from?</h1>
        <h1>hello {this.state.name}, I'm from {this.state.place}</h1>
        <button onClick={this.changeCollege.bind(this)}>Click</button>
        </div>
    )
}
}