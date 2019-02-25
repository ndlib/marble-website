import React from 'react'
import { shallow } from 'enzyme'
import Source, { buildSrcSet, buildSizes } from './'
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

const srcSetOptions = [
  { size: '100', name: '100px' },
  { size: '50' },
]
const sizes = [
  { rule: '(max-width: 1px)', size: '2px' },
  { size: '4px' },
]

describe('Render Source Component', () => {
  const image = {
    service: { '@id': 'abc' },
  }
  const setSrcSetSpy = jest.spyOn(Source.prototype, 'setSrcSet')

  test('shouldLoad false, then set true', () => {
    const wrapper = shallow(<Source shouldLoad={false} image={image} sizes={sizes} srcSetOptions={srcSetOptions} />)
    expect(wrapper.find('source').exists()).toBeFalsy()
    wrapper.setProps({ shouldLoad: true })
    expect(setSrcSetSpy).toBeCalled()
  })

  test('shouldLoad true on load', () => {
    shallow(<Source shouldLoad image={image} sizes={sizes} srcSetOptions={srcSetOptions} />)
    expect(setSrcSetSpy).toBeCalled()
  })
})

test('buildSrcSet', () => {
  const expectedSrcSet = 'http://example.com/some.tif/full/100,/0/default.jpg 100px,\n http://example.com/some.tif/full/50,/0/default.jpg'

  buildSrcSet('http://example.com/some.tif', srcSetOptions).then((r) => {
    const srcSet = r
    expect(srcSet).toEqual(expectedSrcSet)
  })
})

test('buildSizes', () => {
  const expectedSizes = '(max-width: 1px) 2px,\n 4px'

  const builtSizes = buildSizes(sizes)
  expect(builtSizes).toEqual(expectedSizes)
})
