import React from 'react'
import { shallow } from 'enzyme'
import { PageNum, mapStateToProps } from './'
import PaginationButton from './PaginationButton'

let wrapper

test('Objects will render when called', () => {
  const searchReducer = {
    page: 2,
  }
  wrapper = shallow(<PageNum searchReducer={searchReducer} />)
  expect(wrapper.find('.pagenum').exists()).toBeTruthy()
  expect(wrapper.find(PaginationButton).length).toEqual(2)
  expect(wrapper.find('.pageLink').text()).toEqual('Page 2')
})

test('mapStateToProps', () => {
  const state = { state: 'props' }
  const stateProps = mapStateToProps(state)
  expect(stateProps).toEqual(state)
})
