import React from 'react'
import { shallow } from 'enzyme'
import ActionButton from './'

const FakeIcon = () => {
  return (<div>SVG MARKUP HERE</div>)
}
const FakeActiveIcon = () => {
  return (<div>DIFFERENT SVG MARKUP HERE</div>)
}
const action = jest.fn()
const basicWrapper = shallow(
  <ActionButton
    name='test'
    action={action}
    icon={FakeIcon}
  />
)

test('simple test', () => {
  expect(basicWrapper.find('button')).toBeTruthy()
  expect(basicWrapper.find('.actionButton.test')).toBeTruthy()
  expect(basicWrapper.find('div').text()).toEqual('SVG MARKUP HERE')
})

test('simulate click event', () => {
  basicWrapper.find('button').simulate('click')
  expect(action).toHaveBeenCalled()
})

test('test of isActive', () => {
  const wrapper = shallow(
    <ActionButton
      name='test'
      action={action}
      icon={FakeIcon}
      activeIcon={FakeActiveIcon}
      isActive
    />
  )
  expect(wrapper.find('div').text()).toEqual('DIFFERENT SVG MARKUP HERE')
})
