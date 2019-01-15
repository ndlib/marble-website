import React from 'react'
import { shallow } from 'enzyme'
import { ManifestView } from './'
import NotFound from 'Components/Shared/NotFound'
import Loading from 'Components/Shared/Loading'
import ManifestDisplayRouter from './ManifestDisplayRouter'
import {
  STATUS_FETCHING,
  STATUS_READY,
  STATUS_ERROR,
} from 'Store/actions/manifestActions'
import {
  COLLECTION_CONTEXT,
} from 'Constants/viewingContexts'
let wrapper

test('Returns Loading when not ready', () => {
  const match = {
    params: {
      context: COLLECTION_CONTEXT,
      contextId: '123',
    },
  }
  const manifests = {
    '123': { status: STATUS_FETCHING },
  }
  wrapper = shallow(<ManifestView match={match} manifests={manifests} />)
  expect(wrapper.find(Loading).exists()).toBeTruthy()
})

test('Returns NotFound when not found', () => {
  const match = {
    params: {
      context: COLLECTION_CONTEXT,
      contextId: '456',
    },
  }
  const manifests = {
    '456': { status: STATUS_ERROR },
  }
  wrapper = shallow(<ManifestView match={match} manifests={manifests} />)
  expect(wrapper.find(NotFound).exists()).toBeTruthy()
})

test('Returns ManifestDisplayRouter when ready', () => {
  let match = {
    params: {
      context: COLLECTION_CONTEXT,
      contextId: '789',
    },
  }
  const manifests = {
    '789': { status: STATUS_READY },

  }
  wrapper = shallow(<ManifestView match={match} manifests={manifests} />)
  expect(wrapper.find(ManifestDisplayRouter).exists()).toBeTruthy()
})
