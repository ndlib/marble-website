import React from 'react'
import Select from 'react-select'
import { shallow } from 'enzyme'
import {
  PerPage,
  handleChange,
} from './'
import { createMemoryHistory } from 'history'

let history = createMemoryHistory('/search')
const dispatch = jest.fn()
const searchReducer = {
  terms: [],
  perpage: 1,
}
const wrapper = shallow(<PerPage searchReducer={searchReducer} history={history} />)

test('PerPage has React Select', () => {
  expect(wrapper.find(Select).exists()).toBeTruthy()
  const historySpy = jest.spyOn(history, 'push')
  wrapper.find(Select).simulate('change', { value: 'abc' })
  expect(historySpy).toHaveBeenCalled()
})

test('PerPage dispatches handleChange with updated values', () => {
  dispatch(handleChange('this', 'terms', history, dispatch))
  expect(dispatch).toHaveBeenCalled()
})
