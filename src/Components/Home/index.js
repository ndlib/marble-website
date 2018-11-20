import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <React.Fragment>
      <div><Link to='/search'>Search Page</Link></div>
      <div><Link to='/collection/b19974760'>Test Collection</Link></div>
    </React.Fragment>
  )
}

export default Home
