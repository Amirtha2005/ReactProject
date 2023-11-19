import React from 'react'

export default function Ternary({isLoggedIn}) {
  return (
    <div>
      {isLoggedIn? <p>Welcome,user!</p>:<p>Please log in.</p>}
    </div>
  )
}
