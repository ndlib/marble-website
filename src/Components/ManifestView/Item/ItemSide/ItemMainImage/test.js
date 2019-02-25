import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'
import { ItemMainImage } from './'
import ExpandIcon from './ExpandIcon'
import IIIFImage from 'Components/Shared/IIIFImage'
import { ITEM_CONTEXT, VIEWER_CONTEXT } from 'Constants/viewingContexts'
import urlContext from 'Functions/urlContext'
const match = {
  params: {
    context: ITEM_CONTEXT,
    contextId: '123',
  },
}
let manifest = {
  data: {
    sequences: [{
      canvases: [{
        images: [{
          resource: {},
        }],
      }],
    }],
  },
}

test('Renders a link to the viewer', () => {
  const wrapper = shallow(<ItemMainImage currentManifest={manifest} match={match} />)
  expect(wrapper.find(Link).prop('to')).toEqual(urlContext(`/${VIEWER_CONTEXT}/${match.params.contextId}`, match))
})

test('Renders the correct image', () => {
  manifest = {
    data: {
      sequences: [
        {
          canvases: [
            {
              images: [
                { resource: { '@id': 'test.jpg' } },
              ],
            },
          ],
        },
      ],
    },
  }
  const wrapper = shallow(<ItemMainImage currentManifest={manifest} match={match} />)
  expect(wrapper.find(IIIFImage).exists()).toBeTruthy()
  expect(wrapper.find(ExpandIcon).exists()).toBeTruthy()
  expect(wrapper.find('.itemImage').exists()).toBeTruthy()
})
