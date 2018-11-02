import React, { Component } from 'react'
import hamburgerIcon from './baseline-menu-24px.svg'
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
        <img
          src={hamburgerIcon}
          alt='menu'
          onClick={this.toggle}
        />
        <NavigationLinks />
      </div>
    )
  }
}

export default Hamburger
