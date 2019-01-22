import React from 'react'
import { shallow } from 'enzyme'
import { Viewer } from './'
import { UNIVERSAL_VIEWER_BASE_URL } from 'Configurations/apis'

test('Renders an iframe with the correct src', () => {
  const manifest = {
    data: {
      '@id': 'http://manifest.location',
    },
  }
  const history = {
    location: {},
  }
  const wrapper = shallow(<Viewer currentManifest={manifest} history={history} />)

  expect(wrapper.find('iframe').prop('src')).toEqual(`${UNIVERSAL_VIEWER_BASE_URL}#?manifest=http://manifest.location`)
})

test('Renders an iframe with the correct src with an additional query param', () => {
  const manifest = {
    data: {
      '@id': 'http://manifest.location',
    },
  }

  const history = {
    location: {
      search: '?cv=4',
    },
  }

  const wrapper = shallow(<Viewer currentManifest={manifest} history={history} />)

  expect(wrapper.find('iframe').prop('src')).toEqual(`${UNIVERSAL_VIEWER_BASE_URL}#?manifest=http://manifest.location&cv=4`)
})
