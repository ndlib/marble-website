import React from 'react'
import { mount } from 'enzyme'
import About from './'
import ReactMarkdown from 'react-markdown'

const wrapper = mount(<About />)

test('About renders introduction section stuff', () => {
  expect(wrapper.find('#introduction').exists()).toBeTruthy()
  expect(wrapper.find('h1').exists()).toBeTruthy()
  expect(wrapper.find('h1').first().text()).toEqual('Introduction')
  expect(wrapper.find(ReactMarkdown).first().props().source).toEqual('introduction.md')
})

test('About renders partners sections', () => {
  expect(wrapper.find('.partner1').exists()).toBeTruthy()
  expect(wrapper.find(ReactMarkdown).at(1).props().source).toEqual('partner1.md')
  expect(wrapper.find('.partner2').exists()).toBeTruthy()
  expect(wrapper.find(ReactMarkdown).at(2).props().source).toEqual('partner2.md')
  expect(wrapper.find('.partner3').exists()).toBeTruthy()
  expect(wrapper.find(ReactMarkdown).at(3).props().source).toEqual('partner3.md')
})
