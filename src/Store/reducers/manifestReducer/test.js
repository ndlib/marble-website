import reducer from './'
import {
  FETCH_MANIFEST,
  RECEIVE_MANIFEST,
  RECEIVE_MANIFEST_ERROR,
  MANIFEST_VIEW_CHANGE,
  STATUS_FETCHING,
  STATUS_READY,
  STATUS_ERROR,
} from 'Store/actions/manifestActions'

test('Should return an initial state', () => {
  expect(reducer(undefined, {})).toEqual({ manifests: {}, view: 'grid' })
})

test('Should return fetching', () => {
  const action = { type: FETCH_MANIFEST, id: 'fake_id' }
  expect(reducer(undefined, action)).toEqual(
    {
      manifests: {
        'fake_id': {
          status: STATUS_FETCHING,
          data: null,
        },
      },
      view: 'grid',
    }
  )
})

test('Should return an error', () => {
  const action = { type: RECEIVE_MANIFEST_ERROR, id: 'fake_id' }
  expect(reducer(undefined, action)).toEqual(
    {
      manifests: {
        'fake_id': {
          status: STATUS_ERROR,
          data: null,
        },
      },
      view: 'grid',
    }
  )
})

test('Should return full manifest and ready', () => {
  const initialState = {
    manifests: {
      'manifest_id': {
        status: STATUS_FETCHING,
        data: null,
      },
    },
  }
  const receiveAction = {
    type: RECEIVE_MANIFEST,
    id: 'manifest_id',
    data: { metadata: 'stuff' },
  }

  expect(reducer(initialState, receiveAction)).toEqual({
    'manifests':  {
      'manifest_id':  {
        'data':  {
          'metadata': 'stuff',
        },
        'status': STATUS_READY,
      },
    },
  })
})

test('Does not forget existing manifests on new fetch', () => {
  const initialState = {
    manifests: {
      'manifest_1':  {
        'data':  {
          'metadata': 'things',
        },
        'status': STATUS_READY,
      },
    },
  }
  const receiveAction = {
    type: FETCH_MANIFEST,
    id: 'manifest_2',
  }

  expect(reducer(initialState, receiveAction)).toEqual({
    'manifests':  {
      'manifest_1':  {
        'data':  {
          'metadata': 'things',
        },
        'status': STATUS_READY,
      },
      'manifest_2':  {
        'data':  null,
        'status': STATUS_FETCHING,
      },
    },
  })
})

test('Does not forget existing manifests on new receive', () => {
  const initialState = {
    manifests: {
      'manifest_1':  {
        'data':  {
          'metadata': 'things',
        },
        'status': STATUS_READY,
      },
      'manifest_2': {
        status: STATUS_FETCHING,
        data: null,
      },
    },
  }
  const receiveAction = {
    type: RECEIVE_MANIFEST,
    id: 'manifest_2',
    data: { metadata: 'stuff' },
  }

  expect(reducer(initialState, receiveAction)).toEqual({
    'manifests':  {
      'manifest_1':  {
        'data':  {
          'metadata': 'things',
        },
        'status': STATUS_READY,
      },
      'manifest_2':  {
        'data':  {
          'metadata': 'stuff',
        },
        'status': STATUS_READY,
      },
    },
  })
})

test('Switches view', () => {
  const initalState = {
    manifests: {},
    view: 'oldView',
  }
  const receiveAction = {
    type: MANIFEST_VIEW_CHANGE,
    view: 'newView',
  }
  expect(reducer(initalState, receiveAction)).toEqual({
    manifests: {},
    view: 'newView',
  })
})
