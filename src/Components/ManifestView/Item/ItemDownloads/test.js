import React from 'react'
import { shallow } from 'enzyme'
import ItemDownloads from './'
const wrapper = shallow(<ItemDownloads />)

test('It renders a button and an image', () => {
  expect(wrapper.find('button').exists()).toBeTruthy()
  expect(wrapper.find('img').exists()).toBeTruthy()
})
