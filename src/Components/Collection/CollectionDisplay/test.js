import React from 'react'
import { shallow } from 'enzyme'
import CollectionDisplay, { defineItems } from './'
import CollectionImage from './CollectionImage'
import SideText from 'Components/Shared/SideText'
import MainSide from 'Components/Shared/MainSide'
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

test('Renders the subcomponents', () => {
  const manifest = {
    data: {
      manifests: ['d', 'e'],
      image: 'img.png',
      label: 'A LABEL',
      description: 'A DESCRIPTION',
    },
  }
  const wrapper = shallow(<CollectionDisplay currentManifest={manifest} start={0} perPage={5} />)
  expect(wrapper.find(CollectionImage).exists()).toBeTruthy()
  expect(wrapper.find(SideText).exists()).toBeTruthy()
  expect(wrapper.find(MainSide).exists()).toBeTruthy()
  expect(wrapper.find(CardList).exists()).toBeTruthy()
})
