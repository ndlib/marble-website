import React from 'react'
import { connect } from 'react-redux'

import './style.css'

class Chosen extends React.Component {
  static get propTypes () {
    return {
      children: PropTypes.any,
    }
  }

  render () {
    return (
        <select className='Chosen' ref={el => (select = el) >
          {this.props.children}
        </select>
    )
  }
}

const PerPage = () => {
  return (
    <div id='PerPage' onChange="this.form.submit()">
      <Chosen>
        <option value='10'>10/page</option>
        <option value='20'>20/page</option>
        <option value='30'>30/page</option>
        <option value='40'>40/page</option>
        <option value='50'>50/page</option>
      </Chosen>
    </div>
  )
}

export default connect()(PerPage)
