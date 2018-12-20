import React from 'react'
import { shallow } from 'enzyme'
import DownloadIcon from './'

const wrapper = shallow(<DownloadIcon />)
test('Renders an svg element', () => {
  expect(wrapper.find('svg').props().xmlns).toEqual('http://www.w3.org/2000/svg')
})
