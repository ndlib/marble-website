import React from 'react'
import PropTypes from 'prop-types'
import SideText from 'Components/Shared/SideText'
import MainSide from 'Components/Shared/MainSide'
import Card from 'Components/Shared/Card'
import CollectionImage from './CollectionImage'
import { MANIFEST_BASE_URL } from 'Configurations/apis'

const CollectionDisplay = ({ currentManifest, start, perPage }) => {
  let items
  if (currentManifest.data.viewingHint === 'multi-part') {
    items = currentManifest.data.collections
  } else {
    items = currentManifest.data.manifests
  }

  return (
    <React.Fragment>
      <CollectionImage
        image={currentManifest.data.image}
        altText={currentManifest.data.label}
      />
      <SideText
        title={currentManifest.data.label}
        text={currentManifest.data.description}
      />
      <MainSide>
        {
          items.slice(start, start + perPage).map(item => {
            return (
              <Card
                key={item['@id']}
                title={item.label}
                image={null}
                url={`/collection${item['@id'].replace(MANIFEST_BASE_URL, '/')}`}
              />)
          })
        }
      </MainSide>
    </React.Fragment>
  )
}

CollectionDisplay.propTypes = {
  currentManifest: PropTypes.object.isRequired,
  start: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
}

export default CollectionDisplay
