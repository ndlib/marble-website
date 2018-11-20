import React from 'react'
import { mount } from 'enzyme'
import { Link, MemoryRouter } from 'react-router-dom'
import Card from './'
import { DEFAULT_ITEM_IMAGE } from 'Configurations/customizations'

const mountWithRouter = node => mount(<MemoryRouter>{node}</MemoryRouter>)
let wrapper

test('Card renders with all props', () => {
  wrapper = mountWithRouter(
    <Card
      title='TEST TITLE'
      image={'image.png'}
      url='/test-url'
    />)
  expect(wrapper.find('.card').exists()).toBeTruthy()
  expect(wrapper.find(Link).exists()).toBeTruthy()
  expect(wrapper.find(Link).props().to).toEqual('/test-url')
  expect(wrapper.find('h3').exists()).toBeTruthy()
  expect(wrapper.find('h3').text()).toEqual('TEST TITLE')
  expect(wrapper.find('.cardImage').exists()).toBeTruthy()
  expect(wrapper.find('img').prop('src')).toEqual('image.png')
})

test('Card renders default image with null image prop', () => {
  wrapper = mountWithRouter(
    <Card
      title='TEST TITLE'
      image={null}
      url='/test-url'
    />)
  expect(wrapper.find('.card').exists()).toBeTruthy()
  expect(wrapper.find(Link).exists()).toBeTruthy()
  expect(wrapper.find(Link).props().to).toEqual('/test-url')
  expect(wrapper.find('h3').exists()).toBeTruthy()
  expect(wrapper.find('h3').text()).toEqual('TEST TITLE')
  expect(wrapper.find('.cardImage').exists()).toBeTruthy()
  expect(wrapper.find('img').prop('src')).toEqual(DEFAULT_ITEM_IMAGE)
})

test('Card renders null if no title', () => {
  // supress error message of known console.error of missing prop
  console.error = jest.fn()
  wrapper = mountWithRouter(
    <Card
      url='/test-url'
    />)
  expect(wrapper.find('.card').exists()).toBeFalsy()
})

test('Card renders null if no url', () => {
  // supress error message of known console.error of missing prop
  console.error = jest.fn()
  wrapper = mountWithRouter(
    <Card
      title='TEST TITLE'
    />)
  expect(wrapper.find('.card').exists()).toBeFalsy()
})
