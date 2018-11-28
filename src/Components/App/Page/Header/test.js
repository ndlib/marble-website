import React from 'react'
import { mount } from 'enzyme'
import Header from './'
import HeaderImage from './HeaderImage'
jest.mock('Configurations/customizations', () => {
  return {
    INSTITUTION_LOGO: 'MOCK_INSTITUTION_LOGO.png',
    INSTITUTION_LOGO_ALT_TEXT: 'MOCK INSTITUTION ALT TEXT',
    INSTITUTION_HOME_PAGE: 'http://example.edu',
    INSTITUTION_LOGO_HEIGHT: '10px',
    INSTITUTION_LOGO_WIDTH: '10px',
    DEPARTMENT_LOGO: 'MOCK_DEPARTMENT_LOGO.png',
    DEPARTMENT_LOGO_ALT_TEXT: 'MOCK DEPARTMENT ALT TEXT',
    DEPARTMENT_HOME_PAGE: 'http://sample.edu',
    DEPARTMENT_LOGO_HEIGHT: '10px',
    DEPARTMENT_LOGO_WIDTH: '10px',
  }
})
let wrapper
beforeEach(() => {
  wrapper = mount(<Header />)
})

test('Header renders the appropriate divs', () => {
  expect(wrapper.find('.header').exists()).toBeTruthy()
  expect(wrapper.find('.headerInner').exists()).toBeTruthy()
  expect(wrapper.find(HeaderImage)).toHaveLength(2)
})

test('Header renders institution logo', () => {
  expect(wrapper.find({ href: 'http://example.edu' }).exists()).toBeTruthy()
  expect(wrapper.find({ src: 'MOCK_INSTITUTION_LOGO.png' }).exists()).toBeTruthy()
  expect(wrapper.find({ alt: 'MOCK INSTITUTION ALT TEXT' }).exists()).toBeTruthy()
})

test('Header renders department logo', () => {
  expect(wrapper.find({ href: 'http://sample.edu' }).exists()).toBeTruthy()
  expect(wrapper.find({ src: 'MOCK_DEPARTMENT_LOGO.png' }).exists()).toBeTruthy()
  expect(wrapper.find({ alt: 'MOCK DEPARTMENT ALT TEXT' }).exists()).toBeTruthy()
})
