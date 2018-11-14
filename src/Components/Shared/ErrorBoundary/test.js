import React from 'react'
import { shallow, mount } from 'enzyme'
import ErrorBoundary from './'

const TestComponent = (props) => {
  return <div>{props.testProp}</div>
}

const BrokenComponent = () => {
  // do not return anything and throw error
  throw new Error('I AM ERROR')
}

beforeEach(() => {
  // We know there are specific error and logging events associated
  // with the BrokenComponet. We do not want to see them right now.
  jest.spyOn(console, 'error')
  global.console.error.mockImplementation(() => {})
  jest.spyOn(console, 'log')
  global.console.log.mockImplementation(() => {})
})

test('ErrorBoundary renders the child commponent when there is no error', () => {
  const wrapper = shallow(<ErrorBoundary><div>Some Text</div></ErrorBoundary>)
  expect(wrapper.containsMatchingElement(<div>Some Text</div>)).toBeTruthy()
})

test('ErrorBoundary renders a commponent with props when there is no error', () => {
  const wrapper = shallow(<ErrorBoundary><TestComponent testProp='Some Text' /></ErrorBoundary>).dive(1)
  expect(wrapper.containsMatchingElement(<div>Some Text</div>)).toBeTruthy()
})

test('ErrorBoundary renders `null` when the commponent has an error', () => {
  const wrapper = mount(<ErrorBoundary><BrokenComponent /></ErrorBoundary>)
  expect(wrapper.children().length).toBe(0)
})
