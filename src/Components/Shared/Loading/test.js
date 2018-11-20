import React from 'react'
import { shallow } from 'enzyme'
import Loading from './'

const wrapper = shallow(<Loading />)

test('Loading component, gotta test \'em all.', () => {
  expect(wrapper.find('.sk-three-bounce').exists()).toBeTruthy()
  expect(wrapper.find('.sk-bounce1').exists()).toBeTruthy()
  expect(wrapper.find('.sk-bounce2').exists()).toBeTruthy()
  expect(wrapper.find('.sk-bounce3').exists()).toBeTruthy()
  expect(wrapper.find('.sk-child').length).toEqual(3)
})
