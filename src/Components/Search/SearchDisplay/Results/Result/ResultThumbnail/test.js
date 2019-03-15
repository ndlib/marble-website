import React from 'react'
import { shallow } from 'enzyme'
import ResultThumbnail, { imageFromDoc } from './'
import noImage from 'Configurations/Logos/no.image.svg'

test('Render an image', () => {
  const wrapper = shallow(<ResultThumbnail doc={{}} />)

  expect(wrapper.find('.thumbnail').exists()).toBeTruthy()
})

test('Use default image', () => {
  const doc = {
    delivery: {
      link: [],
    },
  }
  const imageUrl = imageFromDoc(doc)
  expect(imageUrl).toEqual(noImage)
})

test('Get image from doc data', () => {
  const doc = {
    delivery: {
      link: [
        { linkType: 'http://purl.org/pnx/linkType/thumbnail' },
      ],
    },
  }
  const imageUrl = imageFromDoc(doc)
  expect(imageUrl).toEqual(doc.delivery.link[0].linkURL)
})
