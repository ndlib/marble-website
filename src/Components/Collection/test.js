import React from 'react'
import { shallow } from 'enzyme'
import { Collection } from './'
import NotFound from 'Components/Shared/NotFound'
import Loading from 'Components/Shared/Loading'
import CollectionDisplay from './CollectionDisplay'
import {
  STATUS_FETCHING,
  STATUS_READY,
  STATUS_ERROR,
} from 'Store/actions/manifestActions'

let wrapper

test('Returns Loading when not ready', () => {
  const match = {
    params: {
      manifestId: '123',
    },
  }
  const manifests = {
    '123': { status: STATUS_FETCHING },
  }
  wrapper = shallow(<Collection match={match} manifests={manifests} />)
  expect(wrapper.find(Loading).exists()).toBeTruthy()
})

test('Returns NotFound when not found', () => {
  const match = {
    params: {
      manifestId: '456',
    },
  }
  const manifests = {
    '456': { status: STATUS_ERROR },
  }
  wrapper = shallow(<Collection match={match} manifests={manifests} />)
  expect(wrapper.find(NotFound).exists()).toBeTruthy()
})

test('Returns a CollectionDisplay when ready', () => {
  const match = {
    params: {
      manifestId: '789',
    },
  }
  const manifests = {
    '789': { status: STATUS_READY },

  }
  wrapper = shallow(<Collection match={match} manifests={manifests} />)
  expect(wrapper.find(CollectionDisplay).exists()).toBeTruthy()
})
