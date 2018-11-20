import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { navigationLinks } from 'Configurations/Navigation'
import { closeMenu } from 'Store/actions/menuActions'
const NavigationLinks = ({ dispatch }) => {
  return (
    <nav>
      {
        navigationLinks.map(navLink => {
          return (<Link
            to={navLink.link}
            key={navLink.link}
            onClick={() => dispatch(closeMenu())}
          >{navLink.title}</Link>)
        })
      }
    </nav>
  )
}

NavigationLinks.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return { ...state }
}

export default connect(mapStateToProps)(NavigationLinks)
