import React from 'react'
import { shallow } from 'enzyme'
import ItemActionButtons,
{
  bookmarkAction,
  shareAction,
  printAction,
  downloadAction,
} from './'
import ActionButton from './ActionButton'

const manifest = {
  data: {
    '@id': 'https://iiif.iiif',
  },
}
const wrapper = shallow(<ItemActionButtons manifest={manifest} />)

test('Renders 4 actions buttons and an wrapper', () => {
  expect(wrapper.find('actionButton')).toBeTruthy()
  expect(wrapper.find(ActionButton).length).toEqual(4)
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

test('downloadAction', () => {
  downloadAction()
  expect(spyOnLog).toHaveBeenCalled()
})
