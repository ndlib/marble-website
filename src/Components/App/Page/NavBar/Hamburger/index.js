import React from 'react'
import PropTypes from 'prop-types'
import NavigationLinks from './NavigationLinks'
import { connect } from 'react-redux'
import { toggleMenu } from 'Store/actions/menuActions'
import './style.css'

const Hamburger = ({ dispatch, menuReducer }) => {
  return (
    <div className={`hamburger ${menuReducer.open ? 'open' : 'closed'}`}>
      <span
        id='hamburgerClickable'
        onClick={() => dispatch(toggleMenu())}>
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

Hamburger.propTypes = {
  dispatch: PropTypes.func.isRequired,
  menuReducer: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return { ...state }
}

export default connect(mapStateToProps)(Hamburger)
