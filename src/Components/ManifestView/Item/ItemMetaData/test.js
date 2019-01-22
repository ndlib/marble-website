import React from 'react'
import { shallow } from 'enzyme'
import ItemMetaData from './'
import MetaDataField from 'Components/Shared/MetaDataField'

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

test('renders 3 metadata fields', () => {
  expect(wrapper.find('.metadata')).toBeTruthy()
  expect(wrapper.find(MetaDataField).length).toEqual(3)
})
