import React, { Component } from 'react'

export default class ClassDefault extends Component {
  render() {
    return (
      <div>
        <h1> Today we are learning {this.props.sub}</h1>
      </div>
    )
  }
}

ClassDefault.defaultProps={
sub: "ReactJS"
}
