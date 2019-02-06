import React from 'react'
import { shallow } from 'enzyme'
import { ResultIndex, displayNumber } from './'

const searchReducer = {
  page: 10,
  perPage: 20,
}

const wrapper = shallow(<ResultIndex searchReducer={searchReducer} index={3} />)

test('renderes a span with a class', () => {
  expect(wrapper.find('.resultnum').exists()).toBeTruthy()
})

test('displayNumber returns the correct value', () => {
  const result = displayNumber(5, 4, 2)
  expect(result).toEqual(18)
})
