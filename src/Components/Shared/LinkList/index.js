import React from 'react'
import { PropTypes } from 'prop-types'
import { HashLink as Link } from 'react-router-hash-link'

const LinkList = ({ items }) => {
  if (items) {
    return (
      <React.Fragment>
        {
          items.map(item => {
            return (
              <Link
                to={item.link}
                key={item.link}
              >{item.title}</Link>
            )
          })
        }
      </React.Fragment>
    )
  }
  return null
}

LinkList.propTypes = {
  items: PropTypes.array.isRequired,
}

export default LinkList
