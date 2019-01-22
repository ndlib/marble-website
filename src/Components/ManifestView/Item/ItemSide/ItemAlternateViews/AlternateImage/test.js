import React from 'react'
import { shallow } from 'enzyme'
import { AlternateImage } from './'

test('Renders passed image', () => {
  const match = {
    params: {
      context: 'x',
      contextId: 'y',
    },
  }
  const wrapper = shallow(<AlternateImage image='test.jpg' index={5} max={10} length={20} match={match} />)
  expect(wrapper.find('.alternateImage').exists()).toBeTruthy()
  expect(wrapper.find('img').prop('src')).toEqual('test.jpg')
  expect(wrapper.find('img').prop('alt')).toEqual('Alternate View 5')
})
