import React from 'react'
import { mount } from 'enzyme'
import CollectionImage from './'
import IIIFImage from 'Components/Shared/IIIFImage'

test('CollectionImage renders and image with alt text', () => {
  const wrapper = mount(<CollectionImage image='test.png' altText='Awesome Collection' />)
  expect(wrapper.find('.collectionImage').exists()).toBeTruthy()
  expect(wrapper.find(IIIFImage).exists()).toBeTruthy()
})
