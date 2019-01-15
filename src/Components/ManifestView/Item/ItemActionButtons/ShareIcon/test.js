import React from 'react'
import { shallow } from 'enzyme'
import ShareIcon from './'

const wrapper = shallow(<ShareIcon />)
test('Renders an svg element', () => {
  expect(wrapper.find('svg').props().xmlns).toEqual('http://www.w3.org/2000/svg')
})
