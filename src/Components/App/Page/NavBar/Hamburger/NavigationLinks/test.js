import React from 'react'
import { mount } from 'enzyme'
import { Link, MemoryRouter } from 'react-router-dom'
import NavigationLinks from './'

jest.mock('Configurations/Navigation', () => {
  return {
    navigationLinks: [
      { title: 'Do Something', link: '/do-something' },
      { title: 'Another Thing', link: '/another-thing' },
    ],
  }
})

const mountWithRouter = node => mount(<MemoryRouter>{node}</MemoryRouter>)
const wrapper = mountWithRouter(<NavigationLinks />)
const texts = wrapper.find(Link).map(node => node.text())

test('Should render a nav and links supplied by configuration', () => {
  expect(wrapper.find('nav').exists()).toBeTruthy()
  expect(texts).toEqual(['Do Something', 'Another Thing'])
  expect(texts.length).toEqual(2)
  expect(wrapper.find({ href: '/do-something' }).exists()).toBeTruthy()
  expect(wrapper.find({ href: '/another-thing' }).exists()).toBeTruthy()
})
