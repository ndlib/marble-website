import React from 'react'
import { mount } from 'enzyme'
import MetaDataField from './'

const metadata = { label: 'my label', value: 'my value' }

const wrapper = mount(<MetaDataField metadata={metadata} />)

test('renders a dt and dd with correct values', () => {
  expect(wrapper.find('dt').text()).toEqual('my label')
  expect(wrapper.find('dd').text()).toEqual('my value')
})
