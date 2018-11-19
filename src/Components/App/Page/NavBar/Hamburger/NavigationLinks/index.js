import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { navigationLinks } from 'Configurations/Navigation'
const NavigationLinks = ({ closeFunction }) => {
  return (
    <nav>
      {
        navigationLinks.map(navLink => {
          return (<Link
            to={navLink.link}
            key={navLink.link}
            onClick={() => closeFunction()}
          >{navLink.title}</Link>)
        })
      }
    </nav>
  )
}

NavigationLinks.propTypes = {
  closeFunction: PropTypes.func.isRequired,
}
export default NavigationLinks
