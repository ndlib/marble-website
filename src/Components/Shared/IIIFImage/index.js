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
      src: defaultSrc(this.props.image),
      srcSet: '',
    }
    this.onEnter = this.onEnter.bind(this)
  }

  componentDidMount () {
    const src = defaultSrc(this.props.image)
    checkImage(src).then(r => {
      if (r.status === 'ok') {
        this.setState({ src: src })
      } else {
        this.setState({
          src: DEFAULT_ITEM_IMAGE,
          blur: false,
        })
      }
    })
  }

  onEnter () {
    if (typeof this.props.image !== 'string') {
      defaultSrcSet(typy(this.props.image, 'service[\'@id\']').safeString, this.props.srcSetOptions).then(result => {
        this.setState({ srcSet: result })
        return result
      })
    }
    this.setState({
      blur: false,
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
  srcSetOptions: PropTypes.array.isRequired,
  previewBlur: PropTypes.bool.isRequired,
}

IIIFImage.defaultProps = {
  previewBlug: false,
  srcSetOptions: [
    { size: 250, rule: '200w' },
    { size: 500 },
  ],
}

export default IIIFImage

const checkImage = async (path) => {
  return new Promise(resolve => {
    const img = new Image()
    img.onload = () => resolve({ path, status: 'ok' })
    img.onerror = () => resolve({ path, status: 'error' })
    img.src = path
  })
}

const defaultSrc = (image) => {
  let src
  if (typeof image === 'string') {
    src = image
  } else {
    const imageBaseUrl = typy(image, 'service[\'@id\']').safeString
    src = `${imageBaseUrl}/full/125,/0/default.jpg`
  }
  return src
}

const defaultSrcSet = (baseUrl, srcSetOptions) => {
  const results = srcSetOptions.map(async option => {
    const url = `${baseUrl}/full/${option.size},/0/default.jpg`
    return checkImage(url).then(result => {
      if (result.status === 'ok') {
        if (option.rule) {
          return `${url} ${option.rule}`
        } else {
          return url
        }
      }
    })
  })
  return Promise.all(results).then(async complete => {
    return complete.join(', ')
  })
}
