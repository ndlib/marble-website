import React from 'react'
import { shallow } from 'enzyme'
import BookmarkActiveIcon from './'

const wrapper = shallow(<BookmarkActiveIcon />)
test('Renders an svg element', () => {
  expect(wrapper.find('svg').props().xmlns).toEqual('http://www.w3.org/2000/svg')
})
