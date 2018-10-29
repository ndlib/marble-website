import React from 'react'
import { connect } from 'react-redux'
import './style.css'

class PerPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = { select: 10 }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  render () {
    return (
      <div id='PerPage'>
        <select value={this.select} onChange={this.handleChange}>
          <option value='10'>10/page</option>
          <option value='20'>20/page</option>
          <option value='30'>30/page</option>
          <option value='40'>40/page</option>
          <option value='50'>50/page</option>
        </select>
      </div>
    )
  }
}

export default connect()(PerPage)
