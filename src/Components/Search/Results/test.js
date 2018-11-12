
import React from 'react'
import { mount } from 'enzyme'
import { Results } from './'
import configureStore from 'redux-mock-store'
const mockStore = configureStore()

let store
test('ResultsComponent Renders a default ', () => {
  store = mockStore({})
  const sc = mount(<Results searchResults={[]} store={store} />)
  expect(sc.exists()).toBeTruthy()
})
