import React from 'react'
import { shallow } from 'enzyme'
import Browse from './'
import CardList from 'Components/Shared/CardList'

const manifest = {
  data: {
    collections: [],
  },
}
const wrapper = shallow(<Browse currentManifest={manifest} />)

test('Renders a CardList', () => {
  expect(wrapper.find(CardList).exists()).toBeTruthy()
})
