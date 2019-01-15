import React from 'react'
import { shallow } from 'enzyme'
import Viewer from './'
import { UNIVERSAL_VIEWER_BASE_URL } from 'Configurations/apis'

test('Renders an iframe with the correct src', () => {
  const manifest = {
    data: {
      '@id': 'http://manifest.location',
    },
  }
  const wrapper = shallow(<Viewer currentManifest={manifest} />)

  expect(wrapper.find('iframe').prop('src')).toEqual(`${UNIVERSAL_VIEWER_BASE_URL}#?manifest=http://manifest.location`)
})
