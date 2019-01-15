import React from 'react'
import { shallow } from 'enzyme'
import { RelatedItems } from './'
import Card from 'Components/Shared/Card'

const match = {}

test('renders null when there are no related items', () => {
  const manifest = { data: {} }
  const wrapper = shallow(<RelatedItems currentManifest={manifest} match={match} />)
  expect(wrapper.find('h2').exists()).toBeFalsy()
  expect(wrapper.find(Card).exists()).toBeFalsy()
})

test('renders title and Cards when there is a related item', () => {
  const manifest = {
    data: {
      related: { '@id': 'http://manifest.test' },
    },
  }
  const wrapper = shallow(<RelatedItems currentManifest={manifest} match={match} />)
  expect(wrapper.find('h2').text()).toEqual('Related Items')
  expect(wrapper.find(Card).length).toEqual(1)
})

test('renders title and Cards when there is an array of related items', () => {
  const manifest = {
    data: {
      related: [
        { '@id': 'http://manifest.test' },
        { '@id': 'http://another.test' },
      ],
    },
  }
  const wrapper = shallow(<RelatedItems currentManifest={manifest} match={match} />)
  expect(wrapper.find('h2').text()).toEqual('Related Items')
  expect(wrapper.find(Card).length).toEqual(2)
})
