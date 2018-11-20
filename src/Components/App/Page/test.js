import React from 'react'
import { shallow } from 'enzyme'
import Page from './'
import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'

const wrapper = shallow(<Page><div className='childContent'>Some Content</div></Page>)

test('Page renders Header, NavBar, Footer and specified child content', () => {
  expect(wrapper.find(Header).exists()).toBeTruthy()
  expect(wrapper.find(NavBar).exists()).toBeTruthy()
  expect(wrapper.find(Footer).exists()).toBeTruthy()
  expect(wrapper.find('.mainContent').exists()).toBeTruthy()
  expect(wrapper.find('.childContent').exists()).toBeTruthy()
  expect(wrapper.find('.childContent').text()).toEqual('Some Content')
})
