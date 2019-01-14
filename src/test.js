import React from 'react'
import ReactDOM from 'react-dom'
import { RenderToDOM } from './'
ReactDOM.render = jest.fn()
test('renders without crashing', () => {
  RenderToDOM()
  expect(ReactDOM.render).toHaveBeenCalled()
})
