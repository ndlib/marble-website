
import React from 'react'
import { mount } from 'enzyme'
import { Results } from './'
import configureStore from 'redux-mock-store'
const mockStore = configureStore()

let store, wrapper
beforeEach(() => {
  store = mockStore({})
  wrapper = mount(<Results searchResults={[]} store={store} />)
})
test('ResultsComponent Renders a default ', () => {
  expect(wrapper.exists()).toBeTruthy()
})

test('Results contains ErrorBoundary', () => {
  const sc = shallow(<Results searchResults={['Hello','There']}/>)
  expect(sc.find(ErrorBoundary).exists()).toBeTruthy()
})
