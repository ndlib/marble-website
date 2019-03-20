import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import typy from 'typy'
import checkImage from 'Functions/checkImage'

const Source = ({
  image,
  shouldLoad,
  srcSetOptions,
  sizes,
}) => {
  const [ srcSet, setSrcSet ] = useState('')

  useEffect(() => {
    if (shouldLoad) {
      buildSrcSet(typy(image, 'service[\'@id\']').safeString, srcSetOptions).then(result => {
        setSrcSet(result)
        return result
      })
    }
  })

  // Only return a source set if the images is not a string and
  // a valid srcSet has been built
  if (typeof image !== 'string' && srcSet && srcSet.length > 0) {
    return (
      <source
        type='image/jpeg'
        srcSet={srcSet}
        sizes={buildSizes(sizes)}
      />
    )
  }
  return null
}

Source.propTypes = {
  shouldLoad: PropTypes.bool.isRequired,
  image: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  srcSetOptions: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
}

Source.defaultProps = {
  shouldLoad: false,
}
export default Source

export const buildSrcSet = (baseUrl, srcSetOptions) => {
  const setResults = srcSetOptions.map(async option => {
    const url = `${baseUrl}/full/${option.size},/0/default.jpg`
    return checkImage(url)
      .then(result => {
        if (result.status === 'ok') {
          if (option.name) {
            return `${url} ${option.name}`
          } else {
            return url
          }
        }
      })
  })
  return Promise.all(setResults).then(async complete => {
    complete = complete.filter(c => {
      return c !== 'undefined' ? c : null
    })
    return complete.join(',\n ')
  })
}

export const buildSizes = (sizes) => {
  return sizes.map(size => {
    if (size.rule) {
      return `${size.rule} ${size.size}`
    }
    return `${size.size}`
  }).join(',\n ')
}
