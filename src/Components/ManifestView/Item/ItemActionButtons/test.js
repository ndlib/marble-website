import React from 'react'
import { shallow } from 'enzyme'
import ItemActionButtons,
{
  bookmarkAction,
  shareAction,
  printAction,
} from './'
import ActionButton from './ActionButton'

const wrapper = shallow(<ItemActionButtons />)

test('Renders 3 actions buttons and an wrapper', () => {
  expect(wrapper.find('actionButton')).toBeTruthy()
  expect(wrapper.find(ActionButton).length).toEqual(3)
})

const spyOnLog = jest.spyOn(console, 'log')
beforeEach(() => {
  spyOnLog.mockReset()
})

// TODO test functions (after functions written)

test('bookmarkAction', () => {
  bookmarkAction()
  expect(spyOnLog).toHaveBeenCalled()
})

test('shareAction', () => {
  shareAction()
  expect(spyOnLog).toHaveBeenCalled()
})

test('printAction', () => {
  printAction()
  expect(spyOnLog).toHaveBeenCalled()
})
