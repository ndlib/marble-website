import React from 'react'
import { shallow } from 'enzyme'
import StaticPage from './'
import About from './About'
import Help from './Help'
import Learn from './Learn'
import NotFound from 'Components/Shared/NotFound'
import {
  ABOUT_CONTEXT,
  HELP_CONTEXT,
  LEARN_CONTEXT,
} from 'Constants/pageContexts'

test('Render About Page', () => {
  const match = {
    params: {
      pageType: ABOUT_CONTEXT,
    },
  }
  const wrapper = shallow(<StaticPage match={match} />)
  expect(wrapper.find(About)).toBeTruthy()
})

test('Render Help Page', () => {
  const match = {
    params: {
      pageType: HELP_CONTEXT,
    },
  }
  const wrapper = shallow(<StaticPage match={match} />)
  expect(wrapper.find(Help)).toBeTruthy()
})

test('Render Learn Page', () => {
  const match = {
    params: {
      pageType: LEARN_CONTEXT,
    },
  }
  const wrapper = shallow(<StaticPage match={match} />)
  expect(wrapper.find(Learn)).toBeTruthy()
})

test('Render NotFound Page', () => {
  const match = {
    params: {
      pageType: 'invalid-page-type',
    },
  }
  const wrapper = shallow(<StaticPage match={match} />)
  expect(wrapper.find(NotFound)).toBeTruthy()
})
