import React from 'react'
import { Link } from 'react-router-dom'
import { navigationLinks } from 'Configurations/Navigation'
const NavigationLinks = () => {
  return (
    <nav>
      {
        navigationLinks.map(navLink => {
          return (<Link
            to={navLink.link}
            key={navLink.link}
          >{navLink.title}</Link>)
        })
      }
    </nav>
  )
}

export default NavigationLinks
