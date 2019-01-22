import React from 'react'
import { shallow } from 'enzyme'
import AlternateOverlay from './'

test('renders null most of the time', () => {
  const wrapper = shallow(<AlternateOverlay index={0} max={2} length={5} />)
  expect(wrapper.find('.alternateOveraly').exists()).toBeFalsy()
})

test('renders overlay with overlay number', () => {
  const wrapper = shallow(<AlternateOverlay index={1} max={2} length={5} />)
  expect(wrapper.find('.alternateOverlay').exists()).toBeTruthy()
  expect(wrapper.find('.alternateOverlay').text()).toEqual('+4')
})