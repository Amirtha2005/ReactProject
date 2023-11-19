import React from 'react'
const d={background:"#dda0dd" , width:"%50", };
const b={border:"1px solid black"}
export default function SignInPage() {
  return (
    <div >
      <form style={b} className='loginFull'>
        <h1>LOGIN PAGE</h1>
        <div>
            <label>UserName:</label>
            <input type="text"></input>
        </div>
        <div>
            <label>Password:</label>
            <input type="password"></input>
        </div>
        <div>
            <button style={d}>LOGIN</button>
            <button style={d}>SIGNUP</button>
        </div>
      </form>
    </div>
  )
}

