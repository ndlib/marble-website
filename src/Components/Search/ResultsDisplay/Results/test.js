import React from 'react'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { Results } from './'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
let store, wrapper

beforeEach(() => {
  // store = mockStore({})
  // wrapper = mount(<Results searchResults={[]} store={store} />)
})

test('Results renders a default ', () => {
  // expect(wrapper.exists()).toBeTruthy()
})
