import React from 'react'
import { shallow, mount } from 'enzyme'
import { Link, MemoryRouter } from 'react-router-dom'
import { CardLink, buildSearchQuery } from './'

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
      url={'/test-url'}
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
describe(buildSearchQuery, () => {
  test('buildSearchQuery with search', () => {
    const location = {
      pathname: '/search',
      search: '?term=thing',
    }
    const expected = [
      { label: 'term', value: 'thing' },
      { label: 'ref', value: 'search' },
    ]
    const actual = buildSearchQuery(location)
    expect(actual).toEqual(expected)
  })

  test('buildSearchQuery with null', () => {
    const location = null
    const expected = null
    const actual = buildSearchQuery(location)
    expect(actual).toEqual(expected)
  })
})
