import React from 'react'
import { shallow } from 'enzyme'
import { Breadcrumb, buildCrumbs } from './'

describe('test Breadcrumb', () => {
  const location = {}
  const match = {
    params: {
      context: 'collection',
      contextId: 'abc',
    },
  }
  const reducer = {
    manifests: {
      'abc': {
        data: { label: 'xyz' },
      },
    },
  }

  const wrapper = shallow(<Breadcrumb location={location} match={match} manifestReducer={reducer} />)
  expect(wrapper.find('nav.breadcrumbs').exists()).toBeTruthy()
  expect(wrapper.find('span').text()).toEqual('xyz')
})

describe('test buildCrumbs', () => {
  test('collection context with loaded manifests', () => {
    const manifests = {
      'abc': {
        data: {
          label: 'xyz',
        },
      },
    }
    const search = '?ref=collection&id=abc'
    const expected = [
      { to: '/', label: 'Home' },
      { to: '/browse', label: 'Browse' },
      { to: '/collection/abc', label: 'xyz' },
    ]
    const actual = buildCrumbs(manifests, search)
    expect(actual).toEqual(expected)
  })

  test('collection context without loaded manifests', () => {
    const manifests = {}
    const search = '?ref=collection&id=abc'
    const expected = [
      { to: '/', label: 'Home' },
      { to: '/browse', label: 'Browse' },
      { to: '/collection/abc', label: 'Collection' },
    ]
    const actual = buildCrumbs(manifests, search)
    expect(actual).toEqual(expected)
  })

  test('search context', () => {
    const manifests = {}
    const search = '?ref=search&id=nope&terms=abc&page=1&perpage=2'
    const expected = [
      { to: '/', label: 'Home' },
      { to: { pathname: '/search', search: 'page=1&perpage=2&terms=abc' }, label: 'Search' },
    ]
    const actual = buildCrumbs(manifests, search)
    expect(actual).toEqual(expected)
  })

  test('no context', () => {
    const manifests = {}
    const search = ''
    const expected = [
      { to: '/', label: 'Home' },
      { to: '/browse', label: 'Browse' },
    ]
    const actual = buildCrumbs(manifests, search)
    expect(actual).toEqual(expected)
  })
})
