import React from 'react'
import { mount } from 'enzyme'
import { PageNum } from './'

let wrapper

test('Objects will render when called', () => {
  const searchReducer = {
    page: 2,
    nextpage: true,
  }
  wrapper = mount(<PageNum searchReducer={searchReducer} />)
  expect(wrapper.find('div').exists()).toBeTruthy()
  expect(wrapper.text()).toEqual(expect.stringContaining('<'))
  expect(wrapper.text()).toEqual(expect.stringContaining('>'))
})

test('Objects will not render when not called', () => {
  const searchReducer = {
    page: undefined,
    nextpage: false,
  }
  wrapper = mount(<PageNum searchReducer={searchReducer} />)
  expect(wrapper.find('div').exists()).toBeTruthy()
  expect(wrapper.text()).toEqual(expect.not.stringContaining('<'))
  expect(wrapper.text()).toEqual(expect.not.stringContaining('>'))
})
