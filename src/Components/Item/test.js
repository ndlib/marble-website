import React from 'react'
import { shallow } from 'enzyme'
import { Item } from './'
import ItemDisplay from './ItemDisplay'

const match = {
  params: {
    itemManifestId: '123',
  },
}
const wrapper = shallow(<Item match={match} />)

test('renders ItemDisplay', () => {
  expect(wrapper.find(ItemDisplay)).toBeTruthy()
})
