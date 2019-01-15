import React from 'react'
import { mount } from 'enzyme'
import CollectionImage from './'
import { DEFAULT_COLLECTION_IMAGE } from 'Configurations/customizations'

test('CollectionImage renders and image with alt text', () => {
  const wrapper = mount(<CollectionImage image='test.png' altText='Awesome Collection' />)
  expect(wrapper.find('.collectionImage').exists()).toBeTruthy()
  expect(wrapper.find('img').prop('src')).toEqual('test.png')
  expect(wrapper.find('img').prop('alt')).toEqual('Awesome Collection')
})

test('CollectionImage renders default image and text', () => {
  const wrapper = mount(<CollectionImage />)
  expect(wrapper.find('.collectionImage').exists()).toBeTruthy()
  expect(wrapper.find('img').prop('src')).toEqual(DEFAULT_COLLECTION_IMAGE)
  expect(wrapper.find('img').prop('alt')).toEqual('Collection Image')
})
