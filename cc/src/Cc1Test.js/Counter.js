import React, { Component } from 'react'
export default class Counter extends Component {
    state={count:0};

    handleIncrement=()=>{
        this.setState({count: this.state.count +1});
       }

       handleDecrement=()=>{
        this.setState({count: this.state.count -1});
       }
  render() {
    return (
      <div >
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increase Click</button>
        <button onMouseOver={this.handleDecrement}>Decrease Click</button>
      </div>
    )
  }
}
