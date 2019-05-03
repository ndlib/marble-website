import React from 'react'
import basicschema from 'Configurations/Schema/basicschema2.json'
import renderer from 'Configurations/Schema/rendering.json'
import PropTypes from 'prop-types'

const MetaTest = (props) => {
  const schema = props.schema != null ? props.schema : basicschema
  const metaObj = []
  renderer.sections[0].attributes.forEach(function (field) {
    if (schema[field.key] != null) {
      switch (field.renderer) {
        case 'title':
          metaObj.push(<h1 className={field.key}> {schema[field.key]} </h1>)
          break
        case 'basic':
        default:
          metaObj.push(<React.Fragment><dt>{field.label}:</dt><dd className={field.key}> {schema[field.key]} </dd></React.Fragment>)
      }
    }
  })
  return (
    <dl>
      {metaObj}
    </dl>
  )
}

MetaTest.propTypes = {
  schema: PropTypes.object,
}

export default MetaTest
