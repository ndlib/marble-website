import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'
import FilterTab from './'

const wrapper = shallow(<FilterTab label='LABEL' target='/target' />)

test('Renders a link to target with a label', () => {
  console.log(wrapper.find('.filterTab').text())
  expect(wrapper.find(Link).prop('to')).toEqual('/target')
  expect(wrapper.find('.filterTab').text()).toEqual('LABEL')
})
