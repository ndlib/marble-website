import React from 'react'
import { shallow } from 'enzyme'
import Footer from './'
import ReactMarkdown from 'react-markdown'

test('Footer renders some divs with markdown text', () => {
  const wrapper = shallow(<Footer />)
  expect(wrapper.find('footer').exists()).toBeTruthy()
  expect(wrapper.find('.footerInner').exists()).toBeTruthy()
  expect(wrapper.find('.footerText').exists()).toBeTruthy()
  expect(wrapper.find(ReactMarkdown).props().source).toEqual('footerText.md')
})
