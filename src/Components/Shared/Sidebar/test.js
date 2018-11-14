import React from 'react'
import { mount } from 'enzyme'
import Sidebar from './'
import { HashLink as Link } from 'react-router-hash-link'
import { MemoryRouter } from 'react-router-dom'

test('Sidebar without a title does not render a title', () => {
  const wrapper = mount(<Sidebar items={[]} />)
  expect(wrapper.find('nav').exists()).toBeTruthy()
  expect(wrapper.find('h2').exists()).toBeFalsy()
})

test('Sidebar with title renders a title', () => {
  const wrapper = mount(<Sidebar title='TEST TITLE' items={[]} />)
  expect(wrapper.find('nav').exists()).toBeTruthy()
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
  // We know React logs an error here, but we can suppress it from output since we know we're doing something bad.
  console.error = jest.fn()
  const wrapper = mount(<Sidebar title='TEST TITLE' />)
  expect(wrapper.find('nav').exists()).toBeTruthy()
  expect(wrapper.find('a').exists()).toBeFalsy()
})
