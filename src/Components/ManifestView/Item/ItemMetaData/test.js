import React from 'react'
import { shallow } from 'enzyme'
import ItemMetaData from './'
import MetaDataField from './MetaDataField'

const manifest = {
  data: {
    label: 'test label',
    metadata: [
      { 'a': '1' },
      { 'b': '2' },
      { 'c': '3' },
    ],
  },
}

const wrapper = shallow(<ItemMetaData currentManifest={manifest} />)

test('renders label', () => {
  expect(wrapper.find('h1').text()).toEqual('test label')
})

test('renders 3 metadata fields', () => {
  expect(wrapper.find('.metadata')).toBeTruthy()
  expect(wrapper.find(MetaDataField).length).toEqual(3)
})
