import React from 'react'
import { shallow } from 'enzyme'
import HeaderImage from './'

const wrapper = shallow(
  <HeaderImage
    className={'testClass'}
    image={'img.png'}
    altText={'alt text'}
    imageHeight={'3px'}
    imageWidth={'4px'}
    linkPath={'http://example.com'}
  />
)

test('It renders all the things', () => {
  expect(wrapper.find('.testClass').exists()).toBeTruthy()
  expect(wrapper.find('img').prop('src')).toEqual('img.png')
  expect(wrapper.find('img').prop('alt')).toEqual('alt text')
  expect(wrapper.find('img').prop('style')).toEqual({ 'height': '3px', 'width': '4px' })
  expect(wrapper.find('a').prop('href')).toEqual('http://example.com')
})
