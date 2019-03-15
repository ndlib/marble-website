import React from 'react'
import { Link } from 'react-router-dom'

export const Breadcrumb = () => {
  return (
    <p>
      <Link to='/url'>Home</Link> >
      <Link to='/url'>Browse</Link> >
      <Link to='/url'>Some Collection</Link> >
      Item Title
    </p>
  )
}

export default Breadcrumb
