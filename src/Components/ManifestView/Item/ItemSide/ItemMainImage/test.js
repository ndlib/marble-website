import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'
import { ItemMainImage } from './'
import { DEFAULT_ITEM_IMAGE } from 'Configurations/customizations'
import { ITEM_CONTEXT, VIEWER_CONTEXT } from 'Constants/viewingContexts'
import urlContext from 'Functions/urlContext'
const match = {
  params: {
    context: ITEM_CONTEXT,
    contextId: '123',
  },
}
let manifest = {}
test('Renders a default image when no image found', () => {
  const wrapper = shallow(<ItemMainImage currentManifest={manifest} match={match} />)
  expect(wrapper.find('img').prop('src')).toEqual(DEFAULT_ITEM_IMAGE)
})

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
  expect(wrapper.find('img').prop('src')).toEqual('test.jpg')
})
