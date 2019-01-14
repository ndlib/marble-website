import React from 'react'
import { shallow } from 'enzyme'
import ItemSide from './'
import ItemMainImage from './ItemMainImage'
import ItemAlternateViews from './ItemAlternateViews'

const wrapper = shallow(<ItemSide currentManifest={{}} />)

test('renders subcomponents', () => {
  expect(wrapper.find(ItemMainImage)).toBeTruthy()
  expect(wrapper.find(ItemAlternateViews)).toBeTruthy()
})
