import React from 'react'
import schema from 'Configurations/Schema/basicschema2.json'
import renderer from 'Configurations/Schema/rendering.json'

const MetaTest = () => {
  var metaProp = []
  var metaObj = []
  renderer.sections[0].attributes.forEach(function (field) {
    if (schema[field.key] != null) {
      switch (field.renderer) {
        case 'title':
          metaObj.push(<div className={schema[field.key]}> {schema[field.key]} </div>)
          break
        case 'basic':
        default:
          metaObj.push(<React.Fragment><dt>{field.label}:</dt><dd> {schema[field.key]} </dd></React.Fragment>)
      }
    }
  })
  return (
    <dl>
      {metaObj}
    </dl>
  )
}

export default MetaTest
