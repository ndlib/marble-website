import React from 'react'
import { shallow } from 'enzyme'
import SiteLogo from './'
import { Link } from 'react-router-dom'
jest.mock('Configurations/customizations', () => {
  return {
    SITE_LOGO: 'MOCK_LOGO.png',
    SITE_LOGO_ALT_TEXT: 'test alt text',
  }
})
test('Site logo renders with specified image and alt text', () => {
  require('Configurations/customizations')
  const wrapper = shallow(<SiteLogo />)
  expect(wrapper.find('.siteTitle').exists()).toBeTruthy()
  expect(wrapper.find('.siteLogo').exists()).toBeTruthy()
  expect(wrapper.find(Link).exists()).toBeTruthy()
  expect(wrapper.find(Link).props().to).toEqual('/')
  expect(wrapper.find({ src: 'MOCK_LOGO.png' }).exists()).toBeTruthy()
  expect(wrapper.find({ alt: 'test alt text' }).exists()).toBeTruthy()
})
