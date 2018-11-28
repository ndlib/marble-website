import React from 'react'
import { mount } from 'enzyme'
import Sidebar from './'
import { MemoryRouter } from 'react-router-dom'

test('Sidebar without a title does not render a title', () => {
  const wrapper = mount(<Sidebar items={[]} />)
  expect(wrapper.find('div').exists()).toBeTruthy()
  expect(wrapper.find('h2').exists()).toBeFalsy()
})

test('Sidebar with title renders a title', () => {
  const wrapper = mount(<Sidebar title='TEST TITLE' items={[]} />)
  expect(wrapper.find('div').exists()).toBeTruthy()
  expect(wrapper.find('h2').exists()).toBeTruthy()
  expect(wrapper.find('h2').text()).toEqual('TEST TITLE')
})

test('Sidebar renders a Link for each item', () => {
  const mountWithRouter = node => mount(<MemoryRouter>{node}</MemoryRouter>)
  const wrapper = mountWithRouter(<Sidebar items={[
    { title: 'test 1', link: '/path1' },
    { title: 'test 2', link: '/path2' },
    { title: 'test 3', link: '/path3#test' },
  ]} />)
  const texts = wrapper.find('a').map(node => node.text())
  expect(texts).toEqual(['test 1', 'test 2', 'test 3'])
  expect(texts.length).toEqual(3)
  expect(wrapper.find({ href: '/path1' }).exists()).toBeTruthy()
  expect(wrapper.find({ href: '/path2' }).exists()).toBeTruthy()
  expect(wrapper.find({ href: '/path3#test' }).exists()).toBeTruthy()
})

test('Sidebar render does\'t fail when no items are passed', () => {
  const wrapper = mount(<Sidebar title='TEST TITLE' />)
  expect(wrapper.find('div').exists()).toBeTruthy()
  expect(wrapper.find('a').exists()).toBeFalsy()
})

test('Sidebar renders text', () => {
  const wrapper = mount(<Sidebar text='some text' />)
  expect(wrapper.find('.sideTextContent').exists()).toBeTruthy()
  expect(wrapper.find('.sideTextContent').text()).toEqual('some text')
})
