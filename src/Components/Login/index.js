import React from 'react'
import './style.css'

const LoginPage = () => {
  return (
    <div className='LoginPage'>
      <h3>Log in</h3>
      <div className='UserName'>
        User Name <input type='text' />
      </div>
      <div className='Password'>
        Password <input type='secret' />
      </div>
      <button alt='Search'>Log in</button>
      <button alt='Google' id='google'>Login with Google</button>
      <button alt='Facebook' id='facebook'>Login with Facebook</button>
    </div>
  )
}

export default LoginPage
