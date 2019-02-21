import React from 'react'
import { shallow } from 'enzyme'
import ManifestCardList from './'
import Card from 'Components/Shared/Card'
import NotFound from 'Components/Shared/NotFound'

const items = [
  { '@id': '1', label: 'One' },
  { '@id': '2', label: 'Two' },
  { '@id': '3', label: 'Three' },
  { '@id': '4', label: 'Four' },
  { '@id': '5', label: 'Five' },
  { '@id': '6', label: 'Six' },
]
let wrapper

test('Renders the correct number of Cards (perpage)', () => {
  wrapper = shallow(<ManifestCardList items={items} start={0} perPage={5} />)
  expect(wrapper.find(Card)).toHaveLength(5)
})

test('Renders the correct number of Cards (perpage greater than length)', () => {
  wrapper = shallow(<ManifestCardList items={items} start={0} perPage={12} />)
  expect(wrapper.find(Card)).toHaveLength(6)
})

test('Renders the correct number of Cards (starting at not zero)', () => {
  wrapper = shallow(<ManifestCardList items={items} start={3} perPage={2} />)
  expect(wrapper.find(Card)).toHaveLength(2)
})

test('Renders the correct number of Cards (starting at not zero AND perPage greater than length)', () => {
  wrapper = shallow(<ManifestCardList items={items} start={3} perPage={12} />)
  expect(wrapper.find(Card)).toHaveLength(3)
})

test('Renders not found when start is out of bounds', () => {
  wrapper = shallow(<ManifestCardList items={items} start={6} perPage={12} />)
  expect(wrapper.find(NotFound).exists()).toBeTruthy()
})
