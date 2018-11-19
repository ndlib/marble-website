import React from 'react'
import { shallow } from 'enzyme'
import SideText from './'

test('Sidebar without a title does not render a title and text', () => {
  const wrapper = shallow(<SideText text='Sample Text' />)
  expect(wrapper.find('.sideText').exists()).toBeTruthy()
  expect(wrapper.find('h2').exists()).toBeFalsy()
  expect(wrapper.find('.sideTextContent').exists()).toBeTruthy()
  expect(wrapper.find('.sideTextContent').text()).toEqual('Sample Text')
})

test('Sidebar with title renders a title and text', () => {
  const wrapper = shallow(<SideText title='TEST TITLE' text='Sample Text' />)
  expect(wrapper.find('.sideText').exists()).toBeTruthy()
  expect(wrapper.find('h2').exists()).toBeTruthy()
  expect(wrapper.find('h2').text()).toEqual('TEST TITLE')
  expect(wrapper.find('.sideTextContent').exists()).toBeTruthy()
  expect(wrapper.find('.sideTextContent').text()).toEqual('Sample Text')
})

test('Sidebar render does\'t fail when no items are passed', () => {
  const wrapper = shallow(<SideText />)
  expect(wrapper.find('.sideText').exists()).toBeTruthy()
  expect(wrapper.find('.sideTextContent').exists()).toBeFalsy()
})
