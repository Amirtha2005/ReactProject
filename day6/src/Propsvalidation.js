import React from 'react'
import PropTypes from 'prop-types'
export default function Propsvalidation(props) {
  return (
    <div>
      <h1>Hello! My name is {props.student}</h1>
    </div>
  )
}
Propsvalidation.propTypes={student:PropTypes.string}