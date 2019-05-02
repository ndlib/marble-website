import React from 'react'
import schema from 'Configurations/Schema/basicschema3.json'
import renderer from 'Configurations/Schema/rendering.json'

const MetaTest = () => {
  var metaProp = []
  var metaObj = []
  renderer.sections[0].attributes.forEach(function (field) {
    switch (field.label) {
      case 'Title':
        metaObj.push(<div className={schema[field.key]}> {schema[field.renderer]} </div>)
        console.log(field)
        break
      case 'Description':
        metaObj.push(<React.Fragment><dt>Description:</dt><dd> {schema[field.renderer]} </dd></React.Fragment>)
        break
      default:
        metaObj.push(<React.Fragment><dt>{field.label}:</dt><dd> {schema[field.renderer]} </dd></React.Fragment>)
    }
  })
  return (
    <dl>
      {metaObj}
    </dl>
  )
}

export default MetaTest
