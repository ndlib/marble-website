import React, { Component } from 'react'
import PropTypes from 'prop-types'
import typy from 'typy'
import checkImage from 'Functions/checkImage'

class Source extends Component {
  constructor (props) {
    super(props)
    this.state = {
      srcSet: '',
    }
    this.setSrcSet = this.setSrcSet.bind(this)
  }

  componentDidMount () {
    if (this.props.shouldLoad) {
      this.setSrcSet()
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.shouldLoad !== this.props.shouldLoad) {
      this.setSrcSet()
    }
  }

  setSrcSet () {
    buildSrcSet(typy(this.props.image, 'service[\'@id\']').safeString, this.props.srcSetOptions).then(result => {
      this.setState({ srcSet: result })
      return result
    })
  }

  render () {
    // no srcSet needed if we only have a string
    if (typeof this.props.image === 'string' || !this.props.shouldLoad) {
      return null
    }
    if (this.state.srcSet && this.state.srcSet.length > 0) {
      return (
        <source
          type='image/jpeg'
          srcSet={this.state.srcSet}
          sizes={buildSizes(this.props.sizes)}
        />

      )
    }
    return null
  }
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
      if (c !== 'undefined') {
        return c
      }
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
