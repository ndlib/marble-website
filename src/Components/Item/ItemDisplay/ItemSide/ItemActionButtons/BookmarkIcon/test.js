import React from 'react'
import { shallow } from 'enzyme'
import BookmarkIcon from './'

const wrapper = shallow(<BookmarkIcon />)
test('Renders an svg element', () => {
  expect(wrapper.find('svg').props().xmlns).toEqual('http://www.w3.org/2000/svg')
})
