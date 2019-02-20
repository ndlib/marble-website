import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Waypoint from 'react-waypoint'
import typy from 'typy'
import { DEFAULT_ITEM_IMAGE } from 'Configurations/customizations'
import './style.css'

class IIIFImage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      blur: this.props.previewBlur,
      srcSet: '',
    }
    this.onEnter = this.onEnter.bind(this)
    if (typeof this.props.image === 'string') {
      this.state.src = this.props.image
    } else {
      this.imageBaseUrl = typy(this.props.image, 'service[\'@id\']').safeObject
      this.state.src = `${this.imageBaseUrl}/full/25,/0/default.jpg`
      this.defaultSrcSet = `${this.imageBaseUrl}/full/125,/0/default.jpg 100w, ` +
      `${this.imageBaseUrl}/full/250,/0/default.jpg 400w, ` +
      `${this.imageBaseUrl}/full/500,/0/default.jpg 1000w`
    }
  }

  onEnter () {
    this.setState({
      blur: false,
      srcSet: this.defaultSrcSet,
    })
  }

  render () {
    return (
      <Waypoint
        onEnter={this.onEnter}>
        <picture>
          <source
            type='image/jpeg'
            srcSet={this.state.srcSet}
          />
          <img
            src={this.state.src}
            alt={this.props.settings.alt}
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
  settings: PropTypes.object,
  previewBlur: PropTypes.bool.isRequired,
}

IIIFImage.defaultProps = {
  previewBlug: false,
}

export default IIIFImage
