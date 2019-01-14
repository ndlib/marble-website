import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import App from './'
import Page from './Page'
import Home from 'Components/Home'
import About from 'Components/About'
import Help from 'Components/Help'
import Search from 'Components/Search'
import ManifestView from 'Components/ManifestView'
import NotFound from 'Components/Shared/NotFound'
jest.mock('react-router-dom', () => {
  const ReactRouterDom = require.requireActual('react-router-dom')
  return {
    ...ReactRouterDom,
    BrowserRouter: ({ children }) => {
      return <div>{children}</div>
    },
  }
})

let wrapper
test('Should render only Home page in Page component for /', () => {
  wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App />
    </MemoryRouter>
  )
  expect(wrapper.find(Page).exists()).toBeTruthy()
  expect(wrapper.find(Home).exists()).toBeTruthy()
  expect(wrapper.find(About).exists()).toBeFalsy()
  expect(wrapper.find(Help).exists()).toBeFalsy()
  expect(wrapper.find(Search).exists()).toBeFalsy()
  expect(wrapper.find(NotFound).exists()).toBeFalsy()
})

test('Should render only About page in Page component for /about', () => {
  wrapper = mount(
    <MemoryRouter initialEntries={[ '/about' ]}>
      <App />
    </MemoryRouter>
  )
  expect(wrapper.find(Page).exists()).toBeTruthy()
  expect(wrapper.find(About).exists()).toBeTruthy()
  expect(wrapper.find(NotFound).exists()).toBeFalsy()
})

test('Should render only Help page in Page component for /help', () => {
  wrapper = mount(
    <MemoryRouter initialEntries={[ '/help' ]}>
      <App />
    </MemoryRouter>
  )
  expect(wrapper.find(Page).exists()).toBeTruthy()
  expect(wrapper.find(Help).exists()).toBeTruthy()
  expect(wrapper.find(NotFound).exists()).toBeFalsy()
})

test('Should render only Search page in Page component for /search', () => {
  wrapper = mount(
    <MemoryRouter initialEntries={[ '/search' ]}>
      <App />
    </MemoryRouter>
  )
  expect(wrapper.find(Page).exists()).toBeTruthy()
  expect(wrapper.find(Search).exists()).toBeTruthy()
  expect(wrapper.find(NotFound).exists()).toBeFalsy()
})

test('Should render only NotFound page in Page component for undefined path', () => {
  wrapper = mount(
    <MemoryRouter initialEntries={[ '/i-am-error' ]}>
      <App />
    </MemoryRouter>
  )
  expect(wrapper.find(Page).exists()).toBeTruthy()
  expect(wrapper.find(Home).exists()).toBeFalsy()
  expect(wrapper.find(About).exists()).toBeFalsy()
  expect(wrapper.find(Help).exists()).toBeFalsy()
  expect(wrapper.find(Search).exists()).toBeFalsy()
  expect(wrapper.find(NotFound).exists()).toBeTruthy()
})

test('Should render NotFound page in Page component for /collection', () => {
  wrapper = mount(
    <MemoryRouter initialEntries={[ '/collection' ]}>
      <App />
    </MemoryRouter>
  )

  expect(wrapper.find(ManifestView).exists()).toBeFalsy()
  expect(wrapper.find(NotFound).exists()).toBeTruthy()
})

test('Should render a Collection page in Page component for /collection/:manifestId', () => {
  wrapper = mount(
    <MemoryRouter initialEntries={[ '/collection/xyz' ]}>
      <App />
    </MemoryRouter>
  )

  expect(wrapper.find(ManifestView).exists()).toBeTruthy()
  expect(wrapper.find(NotFound).exists()).toBeFalsy()
})
