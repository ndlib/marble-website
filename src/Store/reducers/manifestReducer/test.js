import reducer from './'
import {
  FETCH_MANIFEST,
  RECEIVE_MANIFEST,
  STATUS_FETCHING,
  STATUS_READY,
} from 'Store/actions/manifestActions'

test('Should return an initial state', () => {
  expect(reducer(undefined, {})).toEqual({ manifests: {} })
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

test('Does not forget existing manifests', () => {
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
