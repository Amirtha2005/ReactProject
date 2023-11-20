import React, { Component } from 'react'

export default class SetTimeOut extends Component {
    state={color:"DarkBlue"}
    shouldComponentUpdate(){
        return true;
        //if true only that componentDidMount will execute else it won't
    }
    componentDidMount(){
        setTimeout(()=>{this.setState({color:"black"})},3000)
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("i").innerHTML="Previous value is "+prevState.color;
    }
  render() {
    return (
      <div>
        <h1>{this.state.color}</h1>
        <p id="i"></p>
      </div>
    )
  }
}
