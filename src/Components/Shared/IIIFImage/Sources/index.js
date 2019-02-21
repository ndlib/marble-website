import React, { Component } from 'react'
import PropTypes from 'prop-types'
import typy from 'typy'
import checkImage from 'Functions/checkImage'

class Sources extends Component {
  constructor (props) {
    super(props)
    this.state.shouldLoad = this.props.loadSrcSet
  }
  componentDidUpdate (prevProps) {
    if(prevProps.loadSrcSet !== this.props.loadSrcSet) {
      buildSrcSet(image, srcSetOptions, extension).then(result => {
        this.setState()
      })
    }

  }
  render () {
    const { image, srcSetOptions, extensions } = this.props
    if (this.state.shouldLoad) {
      return (
        <React.Fragment>
          {
            extensions.map((extension, index) => {
              return (
                <source
                  key={index}
                  type={`image/${Object.keys(extension)[0]}`}
                  srcSet={}
                />
              )
            })
          }
        </React.Fragment>
      )
    }
    return null
  }
}

Sources.propTypes = {
  image: PropTypes.object.isRequired,
  extensions: PropTypes.array,
  srcSetOptions: PropTypes.array,
  loadSrcSet: PropTypes.bool,
}
export default Sources

// ??????
const buildSrcSet = (image, srcSetOptions, extension = 'jpg') => {
  const baseUrl = typy(image, 'service[\'@id\']').safeString
  const results = srcSetOptions.map(async option => {
    const url = `${baseUrl}/full/${option.size},/0/default.${extension}`
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
