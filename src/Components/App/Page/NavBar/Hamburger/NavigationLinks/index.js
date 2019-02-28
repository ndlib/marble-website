import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { navigationLinks } from 'Configurations/Navigation'
import { closeMenu } from 'Store/actions/menuActions'

export const NavigationLinks = ({ dispatch }) => {
  return (
    <React.Fragment>
      {
        navigationLinks.map(navLink => {
          return (<Link
            to={navLink.link}
            key={navLink.link}
            onClick={() => dispatch(closeMenu())}
          >{navLink.title}</Link>)
        })
      }
    </React.Fragment>
  )
}

NavigationLinks.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return { ...state }
}

export default connect(mapStateToProps)(NavigationLinks)
