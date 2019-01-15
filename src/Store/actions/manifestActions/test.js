import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import {
  FETCH_MANIFEST,
  RECEIVE_MANIFEST,
  RECEIVE_MANIFEST_ERROR,
  getManifest,
  fetchManifest,
  receiveManifest,
  manifestError,
} from 'Store/actions/manifestActions'
import { MANIFEST_BASE_URL } from 'Configurations/apis.js'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

test('fetchManifest', () => {
  expect(fetchManifest('123')).toEqual({ type: FETCH_MANIFEST, id: '123' })
})

test('receiveManifest', () => {
  expect(receiveManifest('123', { some: 'data' })).toEqual({ type: RECEIVE_MANIFEST, id: '123', data: { some: 'data' } })
})

test('manifestError', () => {
  console.error = jest.fn()
  expect(manifestError('123')).toEqual({ type: RECEIVE_MANIFEST_ERROR, id: '123' })
})

test('getManifest for collection', () => {
  const store = mockStore({ manifests: {} })
  fetchMock.get(`${MANIFEST_BASE_URL}collection/${'456'}`, {
    body: { content: ['do something'] },
  })
  const expectedActions = [
    { id: '456', type: FETCH_MANIFEST },
    { id: '456', type: RECEIVE_MANIFEST, data: { content: ['do something'] } },
  ]

  return store.dispatch(getManifest('collection', '456')).then(() => {
    // return of async actions
    expect(store.getActions()).toEqual(expectedActions)
  })
})

test('getManifest for item', () => {
  const store = mockStore({ manifests: {} })
  fetchMock.get(`${MANIFEST_BASE_URL}${'654'}/manifest`, {
    body: { content: ['do something'] },
  })
  const expectedActions = [
    { id: '654', type: FETCH_MANIFEST },
    { id: '654', type: RECEIVE_MANIFEST, data: { content: ['do something'] } },
  ]

  return store.dispatch(getManifest('item', '654')).then(() => {
    // return of async actions
    expect(store.getActions()).toEqual(expectedActions)
  })
})

test('getManifest with error', () => {
  console.error = jest.fn()
  const store = mockStore({ manifests: {} })
  fetchMock.get(`${MANIFEST_BASE_URL}collection/${'789'}`, {
    status: 404,
  })
  const expectedActions = [
    { id: '789', type: FETCH_MANIFEST },
    { id: '789', type: RECEIVE_MANIFEST_ERROR },
  ]

  return store.dispatch(getManifest('collection', '789')).then(() => {
    // return of async actions
    expect(store.getActions()).toEqual(expectedActions)
  })
})

test('getManifest with invalid context', () => {
  console.error = jest.fn()
  const store = mockStore({ manifests: {} })
  const expectedAction = { id: '987', type: RECEIVE_MANIFEST_ERROR }

  // return of async actions
  expect(store.dispatch(getManifest('badcontext', '987'))).toEqual(expectedAction)
})
