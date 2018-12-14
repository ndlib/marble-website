
import React from 'react'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import {
  Results,
  validateDoc,
  mapValidResults
} from './'
import ErrorBoundary from 'Components/Shared/ErrorBoundary'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
let store, wrapper
const dispatch = jest.fn()

beforeEach(() => {
  store = mockStore({})
  wrapper = mount(<Results searchResults={[]} store={store} />)
})
test('Results renders a default ', () => {
  expect(wrapper.exists()).toBeTruthy()
})

test('Results contains ErrorBoundary', () => {
  const sc = mount(<Results searchResults={['Hello', 'There']} />)
  expect(sc.find(ErrorBoundary).exists()).toBeTruthy()
})
