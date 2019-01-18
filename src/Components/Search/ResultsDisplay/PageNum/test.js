import React from 'react'
import { mount } from 'enzyme'
import { PageNum } from './'
import configureStore from 'redux-mock-store'
const mockStore = configureStore()

let store, wrapper

test('Objects will render when called', () => {
  store = mockStore({})
  wrapper = mount(<PageNum store={store} page={2} nextpage />)
  expect(wrapper.find('div').exists()).toBeTruthy()
  expect(wrapper.text()).toEqual(expect.stringContaining('<'))
  expect(wrapper.text()).toEqual(expect.stringContaining('>'))
})

test('Objects will not render when not called', () => {
  store = mockStore({})
  wrapper = mount(<PageNum store={store} page={1} nextpage={false} />)
  expect(wrapper.find('div').exists()).toBeTruthy()
  expect(wrapper.text()).toEqual(expect.not.stringContaining('<'))
  expect(wrapper.text()).toEqual(expect.not.stringContaining('>'))
})
