import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Waypoint from 'react-waypoint'
import typy from 'typy'
import { DEFAULT_ITEM_IMAGE } from 'Configurations/customizations'
import checkImage from 'Functions/checkImage'
import Source from './Source'
import './style.css'

export const IIIFImage = ({
  previewBlur,
  image,
  defaultSize,
  srcSetOnLoad,
  srcSetOptions,
  sizes,
  alt,
}) => {
  const [ blur, setBlur ] = useState(previewBlur)
  const [ src, setSrc ] = useState(defaultSrc(image, defaultSize))
  const [ srcSetShouldLoad, setSrcSetShouldLoad ] = useState(srcSetOnLoad)

  useEffect(() => {
    checkImage(src).then(result => {
      if (result.status !== 'ok') {
        setSrc(DEFAULT_ITEM_IMAGE)
      }
    })
  })

  const onEnter = () => {
    if (typeof image !== 'string') {
      setSrcSetShouldLoad(true)
    }
    setBlur(false)
  }

  return (
    <Waypoint onEnter={onEnter} >
      <picture>
        <Source
          shouldLoad={srcSetShouldLoad}
          image={image}
          srcSetOptions={srcSetOptions}
          sizes={sizes}
        />
        <img
          src={src}
          alt={alt}
          className={blur ? 'blur' : ''}
        />
      </picture>
    </Waypoint>
  )
}

IIIFImage.propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  alt: PropTypes.string.isRequired,
  srcSetOnLoad: PropTypes.bool.isRequired,
  srcSetOptions: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  defaultSize: PropTypes.number.isRequired,
  previewBlur: PropTypes.bool.isRequired,
}

IIIFImage.defaultProps = {
  previewBlur: false,
  srcSetOnLoad: false,
  srcSetOptions: [
    { size: 250, name: '250w' },
    { size: 500, name: '500w' },
    { size: 1000, name: '1000w' },
  ],
  sizes: [
    { size: '500px', rule: '(max-width: 550px)' },
    { size: '250px' },
  ],
  defaultSize: 125,
}

export default IIIFImage

export const defaultSrc = (image, size) => {
  if (typeof image === 'string') {
    return image
  } else {
    const imageBaseUrl = typy(image, 'service[\'@id\']').safeString
    return `${imageBaseUrl}/full/${size},/0/default.jpg`
  }
}
