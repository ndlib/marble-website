import React from 'react'
import { mount } from 'enzyme'
import { Link, MemoryRouter } from 'react-router-dom'
import { CardLink } from './'
import { shallow } from 'enzyme';
import { MANIFEST_BASE_URL } from 'Configurations/apis.js'


const mountWithRouter = node => mount(<MemoryRouter>{node}</MemoryRouter>)
let wrapper

test('CardLink renders with all props', () => {
  wrapper = mountWithRouter(
    <CardLink
      displayClass='testclass'
      url='/test-url'
    />)
  expect(wrapper.find('.testclass').exists()).toBeTruthy()
})

test('CardLink renders Link with MANIFEST_BASE_URL', () => {
  // supress error message of known console.error of missing prop
  wrapper = mountWithRouter(
    <CardLink
      url={MANIFEST_BASE_URL + '/test-url'}
    />)
  expect(wrapper.find(Link).exists()).toBeTruthy()
})

test('CardLink renders hyperlink without MANIFEST_BASE_URL', () => {
  // supress error message of known console.error of missing prop
  wrapper = shallow(
    <CardLink
      url='http://test-url.abc'
    />)
  expect(wrapper.find('[href]').exists()).toBeTruthy()
})
