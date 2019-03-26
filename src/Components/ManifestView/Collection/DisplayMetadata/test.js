import React from 'react'
import { shallow } from 'enzyme'
import ReactMarkdown from 'react-markdown'
import DisplayMetadata from './'
import MetaDataField from 'Components/Shared/MetaDataField'

const metadata = [{ label: 'my label', value: 'my value' }, { label: 'my label two', value: 'my value too' }]

test('Should render MetaDataField', () => {
  let wrapper = shallow(<DisplayMetadata metadata={metadata} />)
  expect(wrapper.find(MetaDataField).exists()).toBeTruthy()
})

test('Should not render', () => {
  let wrapper = shallow(<DisplayMetadata />)
  expect(wrapper.find(MetaDataField).exists()).toBeFalsy()
})
