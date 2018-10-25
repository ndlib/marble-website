import React from 'react'
import './style.css'

class MenuBar extends React.Component {
  render () {
    return (
      <div id='MenuBar' className='MenuBar'>
        <p>Digital Repository Collection</p>
        <div id='Menu' className='Menu'>
          <a href='*'>Browse</a><a href='*'>Exhibitions</a><a href='*'>About</a><a href='*'>Learn</a>
        </div>
        <div id='LoginButton' className='LoginButton'><button>Login</button></div>
      </div>
    )
  }
}

export default MenuBar
