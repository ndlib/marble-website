import React from 'react'
import { shallow } from 'enzyme'
import NotFound from './'

test('Renders a header and a message', () => {
  const wrapper = shallow(<NotFound />)
  expect(wrapper.find('h1').text()).toEqual('Not Found')
  expect(wrapper.find('div').text()).toEqual('The page you requested could not be found.')
})
