import React from 'react'
import { shallow } from 'enzyme'
import AlternateImage from './'

test('Renders passed image', () => {
  const wrapper = shallow(<AlternateImage image='test.jpg' index={5} />)
  expect(wrapper.find('.alternateImage').exists()).toBeTruthy()
  expect(wrapper.find('img').prop('src')).toEqual('test.jpg')
  expect(wrapper.find('img').prop('alt')).toEqual('Alternate View 5')
})
