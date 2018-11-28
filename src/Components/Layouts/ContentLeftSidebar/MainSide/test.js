import React from 'react'
import { shallow } from 'enzyme'
import MainSide from './'

test('MainSide renders a div with class mainSide and child content', () => {
  const wrapper = shallow(<MainSide><div className='childContent'>Some Content</div><div className='secondChild'>More Stuff</div></MainSide>)
  expect(wrapper.find('.mainSide').exists()).toBeTruthy()
  expect(wrapper.find('.childContent').text()).toEqual('Some Content')
  expect(wrapper.find('.secondChild').text()).toEqual('More Stuff')
})
