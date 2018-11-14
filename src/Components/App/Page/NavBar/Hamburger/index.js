import React, { Component } from 'react'
import NavigationLinks from './NavigationLinks'
import './style.css'

class Hamburger extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false,
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle () {
    console.log('click')
    this.setState({ isOpen: !this.state.isOpen })
  }

  render () {
    return (
      <div className={`hamburger ${this.state.isOpen ? 'open' : 'closed'}`}>
        <span
          id='hamburgerClickable'
          onClick={this.toggle}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path
              d='M0 0h24v24H0z'
              fill='none'
            />
            <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
          </svg>
        </span>
        <NavigationLinks />
      </div>
    )
  }
}

export default Hamburger
