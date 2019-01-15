import React from 'react'
import { shallow } from 'enzyme'
import { ManifestView } from './'
import NotFound from 'Components/Shared/NotFound'
import Loading from 'Components/Shared/Loading'
import Collection from './Collection'
import Item from './Item'
import Viewer from './Viewer'
import {
  STATUS_FETCHING,
  STATUS_READY,
  STATUS_ERROR,
} from 'Store/actions/manifestActions'

let wrapper

test('Returns Loading when not ready', () => {
  const match = {
    params: {
      context: 'collection',
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
      context: 'collection',
      contextId: '456',
    },
  }
  const manifests = {
    '456': { status: STATUS_ERROR },
  }
  wrapper = shallow(<ManifestView match={match} manifests={manifests} />)
  expect(wrapper.find(NotFound).exists()).toBeTruthy()
})

describe('Returns a view when ready', () => {
  let match = {
    params: {
      context: 'collection',
      contextId: '789',
    },
  }
  const manifests = {
    '789': { status: STATUS_READY },

  }
  test('Collection', () => {
    wrapper = shallow(<ManifestView match={match} manifests={manifests} />)
    expect(wrapper.find(Collection).exists()).toBeTruthy()
  })

  test('Item', () => {
    match.params.context = 'item'
    wrapper = shallow(<ManifestView match={match} manifests={manifests} />)
    expect(wrapper.find(Item).exists()).toBeTruthy()
  })

  test('Viewer', () => {
    match.params.context = 'viewer'
    wrapper = shallow(<ManifestView match={match} manifests={manifests} />)
    expect(wrapper.find(Viewer).exists()).toBeTruthy()
  })

  test('Bad Context', () => {
    match.params.context = 'badcontext'
    wrapper = shallow(<ManifestView match={match} manifests={manifests} />)
    expect(wrapper.find(NotFound).exists()).toBeTruthy()
  })
})
