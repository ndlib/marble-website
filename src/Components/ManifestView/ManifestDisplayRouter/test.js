import React from 'react'
import { shallow } from 'enzyme'
import ManifestDisplayRouter from './'
import Collection from '../Collection'
import Item from '../Item'
import Viewer from '../Viewer'
import NotFound from 'Components/Shared/NotFound/'
import { STATUS_READY } from 'Store/actions/manifestActions'
import {
  COLLECTION_CONTEXT,
  ITEM_CONTEXT,
  VIEWER_CONTEXT,
} from 'Constants/viewingContexts'

const currentManifest = {
  status: STATUS_READY,
}
let wrapper

test('Collection', () => {
  wrapper = shallow(<ManifestDisplayRouter context={COLLECTION_CONTEXT} currentManifest={currentManifest} />)
  expect(wrapper.find(Collection).exists()).toBeTruthy()
})

test('Item', () => {
  wrapper = shallow(<ManifestDisplayRouter context={ITEM_CONTEXT} currentManifest={currentManifest} />)
  expect(wrapper.find(Item).exists()).toBeTruthy()
})

test('Viewer', () => {
  wrapper = shallow(<ManifestDisplayRouter context={VIEWER_CONTEXT} currentManifest={currentManifest} />)
  expect(wrapper.find(Viewer).exists()).toBeTruthy()
})

test('Bad Context', () => {
  wrapper = shallow(<ManifestDisplayRouter context='badcontext' currentManifest={currentManifest} />)
  expect(wrapper.find(NotFound).exists()).toBeTruthy()
})
