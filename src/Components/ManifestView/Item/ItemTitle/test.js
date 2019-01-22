import React from 'react'
import { shallow } from 'enzyme'
import ItemTitle from './'
const manifest = {
  data: { label: 'TEST TITLE' },
}
const wrapper = shallow(<ItemTitle currentManifest={manifest} />)

test('Renders the title in an h1', () => {
  expect(wrapper.find('h1.itemTitle').exists()).toBeTruthy()
  expect(wrapper.find('h1.itemTitle').text()).toEqual('TEST TITLE')
})
