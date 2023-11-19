import React, { Component } from 'react'

export default class Statecomponent extends Component {

    state={count:0};

   handleIncrement=()=>{
    this.setState({count: this.state.count +1});
   }
   
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Click me</button>
        <button onMouseOver={this.handleIncrement}>Mouse Over</button>
      </div>
    ) 
}
}