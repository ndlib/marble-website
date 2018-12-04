import React from 'react'
import { mount } from 'enzyme'
import Sidebar from './'

test('Sidebar without a title does not render a title', () => {
  const wrapper = mount(<Sidebar children={null} />)
  expect(wrapper.find('div').exists()).toBeTruthy()
  expect(wrapper.find('h2').exists()).toBeFalsy()
})

test('Sidebar with title renders a title', () => {
  const wrapper = mount(<Sidebar title='TEST TITLE' children={null} />)
  expect(wrapper.find('div').exists()).toBeTruthy()
  expect(wrapper.find('h2').exists()).toBeTruthy()
  expect(wrapper.find('h2').text()).toEqual('TEST TITLE')
})

test('Sidebar renders text', () => {
  const wrapper = mount(<Sidebar children='some text' />)
  expect(wrapper.find('.sideBar').text()).toEqual('some text')
})

test('Sidebar renders component', () => {
  const wrapper = mount(<Sidebar children='some text' />)
  expect(wrapper.find('.sideBar').text()).toEqual('some text')
})

test('Sidebar renders component', () => {
  const Dummy = () => {
    return (<div>Fancy Component</div>)
  }
  const wrapper = mount(<Sidebar><Dummy /></Sidebar>)
  expect(wrapper.find(Dummy).exists()).toBeTruthy()
})
