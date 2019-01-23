import React from 'react'
import { shallow } from 'enzyme'
import ItemAlternateViews, { MAX_IMAGES } from './'
import AlternateImage from './AlternateImage'

test('renders null when no alternates', () => {
  const manifest = {}
  const wrapper = shallow(<ItemAlternateViews currentManifest={manifest} />)
  expect(wrapper.find('.alternateImages').exists()).toBeFalsy()
})

test('renders the list of alternates', () => {
  const manifest = {
    data: {
      sequences: [
        {
          canvases: [
            { thumbnail: { '@id': 'test1.png' } },
            { thumbnail: { '@id': 'test2.png' } },
          ],
        },
      ],
    },
  }
  const wrapper = shallow(<ItemAlternateViews currentManifest={manifest} />)
  expect(wrapper.find('.alternateImages').exists()).toBeTruthy()
  expect(wrapper.find(AlternateImage).length).toEqual(2)
})

test('truncates list at MAX_IMAGES', () => {
  const manifest = {
    data: {
      sequences: [
        {
          canvases: [
            { thumbnail: { '@id': 'test1.png' } },
            { thumbnail: { '@id': 'test2.png' } },
            { thumbnail: { '@id': 'test3.png' } },
            { thumbnail: { '@id': 'test4.png' } },
            { thumbnail: { '@id': 'test5.png' } },
            { thumbnail: { '@id': 'test6.png' } },
            { thumbnail: { '@id': 'test7.png' } },
            { thumbnail: { '@id': 'test8.png' } },
            { thumbnail: { '@id': 'test9.png' } },
            { thumbnail: { '@id': 'testA.png' } },
            { thumbnail: { '@id': 'testB.png' } },
            { thumbnail: { '@id': 'testC.png' } },
          ],
        },
      ],
    },
  }
  const wrapper = shallow(<ItemAlternateViews currentManifest={manifest} />)
  expect(wrapper.find('.alternateImages').exists()).toBeTruthy()
  expect(wrapper.find(AlternateImage).length).toEqual(MAX_IMAGES)
})
