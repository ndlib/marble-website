import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import HelpText from './'

jest.mock('Configurations/Help', () => {
  return {
    topics: [
      { title: 'Topic 1', link: '/help/topic-1', textFile: 'mockFile-1' },
      { title: 'Topic 2', link: '/help/topic-2', textFile: 'mockFile-2' },
    ],
  }
})
jest.mock('Configurations/Help/Text/mockFile-1.md', () => {
  return 'Fake file text 1'
})
jest.mock('Configurations/Help/Text/mockFile-2.md', () => {
  return 'Fake file text 2'
})
let wrapper
let mountWithRouter

test('Help renders the correct layout', () => {
  mountWithRouter = node => mount(<MemoryRouter>{node}</MemoryRouter>)
  wrapper = mountWithRouter(<HelpText />)
  expect(wrapper.find('h2').exists()).toBeTruthy()
  expect(wrapper.find(ReactMarkdown).exists()).toBeTruthy()
})

test('Help renders the default with no subpath', () => {
  mountWithRouter = node => mount(<MemoryRouter>{node}</MemoryRouter>)
  wrapper = mountWithRouter(<HelpText />)
  expect(wrapper.find('h2').text()).toEqual('Topic 1')
  expect(wrapper.find('ReactMarkdown').text()).toEqual('Fake file text 1')
})

test('Help renders the right texFile with a subpath', () => {
  mountWithRouter = node => mount(<MemoryRouter initialEntries={[ '/help/topic-2' ]}>{node}</MemoryRouter>)
  wrapper = mountWithRouter(<HelpText />)

  expect(wrapper.find('h2').text()).toEqual('Topic 2')
  expect(wrapper.find('ReactMarkdown').text()).toEqual('Fake file text 2')
})

test('Help renders not found message on error', () => {
  console.error = jest.fn()
  mountWithRouter = node => mount(<MemoryRouter initialEntries={[ '/help/topic-3' ]}>{node}</MemoryRouter>)
  wrapper = mountWithRouter(<HelpText />)

  expect(wrapper.find('.mainHelpContent').text()).toEqual('The selected help content could not be found.')
})
