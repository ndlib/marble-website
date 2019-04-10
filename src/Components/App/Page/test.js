import React from 'react'
import { shallow } from 'enzyme'
import { Page, getClass } from './'
import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'
import {
  BROWSE_CONTEXT,
  COLLECTION_CONTEXT,
  ITEM_CONTEXT,
  VIEWER_CONTEXT,
  EXHIBITIONS_CONTEXT,
  SEARCH_CONTEXT,
} from 'Constants/viewingContexts'

const location = {
  pathname: '/',
}
const wrapper = shallow(<Page location={location}><div className='childContent'>Some Content</div></Page>)

test('Page renders Header, NavBar, Footer and specified child content', () => {
  expect(wrapper.find(Header).exists()).toBeTruthy()
  expect(wrapper.find(NavBar).exists()).toBeTruthy()
  expect(wrapper.find(Footer).exists()).toBeTruthy()
  expect(wrapper.find('.mainContent').exists()).toBeTruthy()
  expect(wrapper.find('.childContent').exists()).toBeTruthy()
  expect(wrapper.find('.childContent').text()).toEqual('Some Content')
})

describe('test getClass', () => {
  test('/', () => {
    const result = getClass('/')
    expect(result).toEqual('home mainContent')
  })
  test('BROWSE_CONTEXT', () => {
    const result = getClass(`/${BROWSE_CONTEXT}`)
    expect(result).toEqual('browse mainContent')
  })
  test('COLLECTION_CONTEXT', () => {
    const result = getClass(`/${COLLECTION_CONTEXT}`)
    expect(result).toEqual('collection mainContent')
  })
  test('ITEM_CONTEXT', () => {
    const result = getClass(`/${ITEM_CONTEXT}`)
    expect(result).toEqual('item mainContent')
  })
  test('VIEWER_CONTEXT', () => {
    const result = getClass(`/${VIEWER_CONTEXT}`)
    expect(result).toEqual('viewer mainContent')
  })
  test('EXHIBITIONS_CONTEXT', () => {
    const result = getClass(`/${EXHIBITIONS_CONTEXT}`)
    expect(result).toEqual('exhibitions mainContent')
  })
  test('SEARCH_CONTEXT', () => {
    const result = getClass(`/${SEARCH_CONTEXT}`)
    expect(result).toEqual('search mainContent')
  })
  test('/something/else', () => {
    const result = getClass('/something/else')
    expect(result).toEqual('mainContent')
  })
})
