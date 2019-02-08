import React from 'react'
import { shallow } from 'enzyme'
import { SearchButton } from './'

const history = {}
const searchReducer = {}
const action = jest.fn()
const wrapper = shallow(
  <SearchButton
    history={history}
    searchReducer={searchReducer}
    submitSearch={action}
  />
)

test('simulate click event', () => {
  wrapper.find('.submitSearch').simulate('click')
  expect(action).toHaveBeenCalled()
})
