import React from 'react'
import { shallow } from 'enzyme'
import { DisplayViewToggle } from './'
import ToggleButton from './ToggleButton'

test('DisplayViewToggle renders', () => {
  const reducer = {}
  const dispatch = jest.fn()
  const wrapper = shallow(<DisplayViewToggle reducer={reducer} dispatch={dispatch} />)
  expect(wrapper.find('.displayViewToggle').exists()).toBeTruthy()
  expect(wrapper.find(ToggleButton).length).toEqual(2)
})
