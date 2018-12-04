import React from 'react'
import { mount } from 'enzyme'
import LinkList from './'
import { MemoryRouter } from 'react-router'

const mountWithRouter = node => mount(<MemoryRouter>{node}</MemoryRouter>)

test('LinkList renders a Link for each item', () => {
  const wrapper = mountWithRouter(<LinkList items={[
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

test('LinkList renders null when no items are supplied', () => {
  // suppress warning about invalid propTypes
  console.error = jest.fn()
  const wrapper = mountWithRouter(<LinkList />)
  expect(wrapper.find(LinkList).children()).toHaveLength(0)
})
