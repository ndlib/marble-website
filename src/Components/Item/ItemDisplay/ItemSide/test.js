import React from 'react'
import { shallow } from 'enzyme'
import ItemSide from './'
import ItemActionButtons from './ItemActionButtons'
import ItemMainImage from './ItemMainImage'
import ItemAlternateViews from './ItemAlternateViews'

const wrapper = shallow(<ItemSide itemId={'1234'} />)

test('renders subcomponents', () => {
  expect(wrapper.find(ItemMainImage)).toBeTruthy()
  expect(wrapper.find(ItemActionButtons)).toBeTruthy()
  expect(wrapper.find(ItemAlternateViews)).toBeTruthy()
})
