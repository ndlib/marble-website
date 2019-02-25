import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Waypoint from 'react-waypoint'
import typy from 'typy'
import { DEFAULT_ITEM_IMAGE } from 'Configurations/customizations'
import checkImage from 'Functions/checkImage'
import Source from './Source'
import './style.css'

class IIIFImage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      blur: this.props.previewBlur,
      src: defaultSrc(this.props.image, this.props.defaultSize),
      srcSetShouldLoad: this.props.srcSetOnLoad,
    }
    this.onEnter = this.onEnter.bind(this)
  }

  componentDidMount () {
    const src = this.state.src
    checkImage(src).then(r => {
      if (r.status !== 'ok') {
        this.setState({
          src: DEFAULT_ITEM_IMAGE,
        })
      }
    })
  }

  onEnter () {
    if (typeof this.props.image !== 'string') {
      this.setState({ srcSetShouldLoad: true })
    }
    this.setState({
      blur: false,
    })
  }

  render () {
    return (
      <Waypoint onEnter={this.onEnter} >
        <picture>
          <Source
            shouldLoad={this.state.srcSetShouldLoad}
            image={this.props.image}
            srcSetOptions={this.props.srcSetOptions}
            sizes={this.props.sizes}
          />
          <img
            src={this.state.src}
            alt={this.props.alt}
            className={this.state.blur ? 'blur' : ''}
          />
        </picture>
      </Waypoint>
    )
  }
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
  let src
  if (typeof image === 'string') {
    src = image
  } else {
    const imageBaseUrl = typy(image, 'service[\'@id\']').safeString
    src = `${imageBaseUrl}/full/${size},/0/default.jpg`
  }
  return src
}
