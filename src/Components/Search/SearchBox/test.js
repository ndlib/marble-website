import React from 'react'
import { shallow } from 'enzyme'
import { SearchBox } from './'

const searchReducer = {
  perpage: 5,
}
const wrapper = shallow(<SearchBox searchReducer={searchReducer} />)

test('Search component contains an input, and a button', () => {
  console.log(wrapper.debug())
  expect(wrapper.find('input').exists()).toBeTruthy()
  expect(wrapper.find('button').exists()).toBeTruthy()
})
