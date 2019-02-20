import React from 'react'
import { mount } from 'enzyme'
import Learn from './'
import ReactMarkdown from 'react-markdown'

const wrapper = mount(<Learn />)

test('Learn renders introduction section stuff', () => {
  expect(wrapper.find('#learn').exists()).toBeTruthy()
  expect(wrapper.find('h2').exists()).toBeTruthy()
  expect(wrapper.find('h2').first().text()).toEqual('Learn')
  expect(wrapper.find(ReactMarkdown).first().props().source).toEqual('learn.md')
})
