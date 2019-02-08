import React from 'react'
import { shallow } from 'enzyme'
import ResultMetaData from './'
import MetaDataField from 'Components/Shared/MetaDataField'

const metadata = [{}, {}, {}, {}]

const wrapper = shallow(<ResultMetaData metadata={metadata} />)

test('Renders a list of metadata', () => {
  expect(wrapper.find('dl').exists()).toBeTruthy()
  expect(wrapper.find(MetaDataField).length).toEqual(4)
})
