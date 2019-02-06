import React from 'react'
import { shallow } from 'enzyme'
import typy from 'typy'
import Result, { buildMetadata } from './'
import ResultThumbnail from './ResultThumbnail'
import ResultMetaData from './ResultMetaData'

const doc = {
  creator: [ 'CREATOR'],
  date: 'a date',
  '@TYPE': 'book',
  delivery: {
    holding: [
      {
        subLocation: 'a place',
      },
    ],
  },
}

const wrapper = shallow(<Result doc={doc} index={5} />)

test('Renders a result', () => {
  expect(wrapper.find('.resultEntry').exists()).toBeTruthy()
  expect(wrapper.find('h2').exists()).toBeTruthy()
  expect(wrapper.find(ResultThumbnail).exists()).toBeTruthy()
  expect(wrapper.find(ResultMetaData).exists()).toBeTruthy()
  expect(wrapper.find('.description').exists()).toBeTruthy()
})

test('Build the correct metadata', () => {
  const metadata = buildMetadata(doc)
  expect(metadata).toEqual([
    { label: 'Owner', value: 'Special Collections' },
    { label: 'Creator', value: typy(doc, 'creator[0]').safeString },
    { label: 'Date', value: typy(doc, 'date').safeString },
    { label: 'Format', value: doc['@TYPE'] },
    { label: 'Collection', value: doc.delivery.holding[0].subLocation },
  ])
})
