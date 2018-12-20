import React from 'react'
import AlternateImage from './AlternateImage'
const ItemAlternateViews = () => {
  const alternateViews = [1, 2, 3]
  return (
    <React.Fragment>
      {
        alternateViews.map(view => {
          return <AlternateImage key={view} />
        })
      }
    </React.Fragment>
  )
}

export default ItemAlternateViews
