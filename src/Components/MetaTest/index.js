import React from 'react'
import schema from 'Configurations/Schema/basicschema3.json'
import renderer from 'Configurations/Schema/rendering.json'

const MetaTest = () => {
  var factory = []
  renderer.sections[0].attributes.forEach(function (field) {
    switch (field.label) {
      case 'Title':
        factory.push(<dt> {schema[field.key]} </dt>)
        break
      case 'Description':
        factory.push(<dd> {schema[field.key]} </dd>)
        break
      default:
        factory.push(<div> {schema[field.key]} </div>)
    }
  })
  return factory
}

export default MetaTest
