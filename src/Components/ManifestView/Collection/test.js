import React from 'react'
import { shallow } from 'enzyme'
import { Collection, defineItems } from './'
import CollectionImage from './CollectionImage'
import ContentLeftSidebar from 'Components/Layouts/ContentLeftSidebar'
import CardList from 'Components/Shared/CardList'

test('Selects items from collections if multi-part', () => {
  const manifest = {
    data: {
      viewingHint: 'multi-part',
      collections: ['a', 'b', 'c'],
      manifests: ['d', 'e'],
    },
  }
  const items = defineItems(manifest.data)
  expect(items).toHaveLength(3)
})

test('Selects items from manifests if not multi-part', () => {
  const manifest = {
    data: {
      collections: ['a', 'b', 'c'],
      manifests: ['d', 'e'],
    },
  }
  const items = defineItems(manifest.data)
  expect(items).toHaveLength(2)
})

const manifest = {
  data: {
    manifests: ['d', 'e'],
    image: 'img.png',
    label: 'A LABEL',
    description: 'A DESCRIPTION',
  },
}

const reducer = {}
test('Renders the subcomponents', () => {
  const wrapper = shallow(<Collection currentManifest={manifest} searchReducer={reducer} />)
  expect(wrapper.find(CollectionImage).exists()).toBeTruthy()
  expect(wrapper.find(ContentLeftSidebar).exists()).toBeTruthy()
  expect(wrapper.find(CardList).exists()).toBeTruthy()
})
