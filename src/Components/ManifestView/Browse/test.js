import React from 'react'
import { shallow } from 'enzyme'
import Browse from './'
import ManifestCardList from 'Components/Shared/ManifestCardList'

const manifest = {
  data: {
    collections: [],
  },
}
const wrapper = shallow(<Browse currentManifest={manifest} />)

test('Renders a ManifestCardList', () => {
  expect(wrapper.find(ManifestCardList).exists()).toBeTruthy()
})
