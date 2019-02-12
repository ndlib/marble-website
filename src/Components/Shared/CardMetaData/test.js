import React from 'react'
import { shallow } from 'enzyme'
import CardMetaData from './'
import MetaDataField from 'Components/Shared/MetaDataField'

test('Renders a list of metadata', () => {
  const metadata = [{}, {}, {}, {}]

  const wrapper = shallow(<CardMetaData metadata={metadata} />)
  expect(wrapper.find('dl').exists()).toBeTruthy()
  expect(wrapper.find(MetaDataField).length).toEqual(4)
})

test('Renders nothing with no metadata', () => {
  const wrapper = shallow(<CardMetaData />)
  expect(wrapper.find('dl').exists()).toBeFalsy()
})
