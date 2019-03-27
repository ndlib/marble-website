import React from 'react'
import { shallow } from 'enzyme'
import typy from 'typy'
import Result, { buildMetadata } from './'
import CardMetaData from 'Components/Shared/CardMetaData'
import Card from 'Components/Shared/Card'

const doc = {
  pnx: {
    display: {
      creationdate: ['a date'],
      format: ['book'],
      ilsAPIid: 'abc',
      creator: 'guy',
    },
    control: {
      sourceid: ['CREATOR'],
    },
  },
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
  expect(wrapper.find(Card).exists()).toBeTruthy()
  expect(wrapper.find(CardMetaData).exists()).toBeTruthy()
  expect(wrapper.find('.description').exists()).toBeTruthy()
})

test('Build the correct metadata', () => {
  const metadata = buildMetadata(doc)
  expect(metadata).toEqual([
    { label: 'Creator', value: typy(doc, 'pnx.display.creator[0]').safeString },
    { label: 'Date', value: typy(doc, 'pnx.display.creationdate[0]').safeString },
    { label: 'Format', value: typy(doc, 'pnx.display.format[0]').safeString },
    { label: 'Repository', value: typy(doc, 'pnx.control.sourceid[0]').safeString },
  ])
})
