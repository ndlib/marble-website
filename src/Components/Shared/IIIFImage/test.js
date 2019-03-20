import React from 'react'
import { shallow } from 'enzyme'
import IIIFImage, { defaultSrc } from './'
import Source from './Source'
import Waypoint from 'react-waypoint'
// eslint-disable-next-line no-unused-vars
import checkImage from 'Functions/checkImage'
jest.mock('Functions/checkImage', () => ({
  __esModule: true,
  default: jest.fn(async (path) => {
    return new Promise(resolve => {
      resolve({ path, status: 'ok' })
    })
  }),
}))

describe('render IIIFImage', () => {
  // const wrapper = shallow(<IIIFImage image='http://example.com/image.png' />)
  // expect(wrapper.find(Waypoint).exists()).toBeTruthy()
  // expect(wrapper.find(Source).exists()).toBeTruthy()
  // expect(wrapper.find('picture').exists()).toBeTruthy()
  // expect(wrapper.find('img').exists()).toBeTruthy()
})

describe('defaultSrc', () => {
  test('typeof image === string', () => {
    const image = 'http://example.com/image.jpg'
    const src = defaultSrc(image, null)
    expect(src).toEqual(image)
  })

  test('typeof image === object', () => {
    const size = 25
    const imageBaseUrl = 'http://example.com/image.png'
    const image = {
      service: {
        '@id': imageBaseUrl,
      },
    }
    const expectedSrc = `${imageBaseUrl}/full/${size},/0/default.jpg`
    const src = defaultSrc(image, size)
    expect(src).toEqual(expectedSrc)
  })
})
