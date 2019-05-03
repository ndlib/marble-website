import React from 'react'
import basicschema from 'Configurations/Schema/basicschema2.json'
import renderer from 'Configurations/Schema/rendering.json'

const MetaTest = (props) => {
  let schema = props.schema != null ? props.schema : basicschema
  var metaObj = []
  renderer.sections[0].attributes.forEach(function (field) {
    if (schema[field.key] != null) {
      switch (field.renderer) {
        case 'title':
          metaObj.push(<h1 itemProp='name' className={field.key}> {schema[field.key]} </h1>)
          break
        case 'basic':
        default:
          metaObj.push(<React.Fragment><dt>{field.label}:</dt><dd itemProp={field.key} className={field.key}> {schema[field.key]} </dd></React.Fragment>)
      }
    }
  })
  return (
    <div
      itemScope
      itemType='http://schema.org/CreativeWork'
      className='schemaOrgMetadata'
    >
      <dl>
        {metaObj}
      </dl>
    </div>
  )
}

export default MetaTest
