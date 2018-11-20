import reducer from './'
import {
  OPEN_MENU,
  CLOSE_MENU,
  TOGGLE_MENU,
} from 'Store/actions/menuActions'

test('Should return open false by default', () => {
  expect(reducer(undefined, {})).toEqual({ open: false })
})

test('Should return open', () => {
  expect(reducer(undefined, { type: OPEN_MENU })).toEqual({ open: true })
  expect(reducer({ open: false }, { type: OPEN_MENU })).toEqual({ open: true })
  expect(reducer({ open: true }, { type: OPEN_MENU })).toEqual({ open: true })
})

test('Should return closed', () => {
  expect(reducer(undefined, { type: CLOSE_MENU })).toEqual({ open: false })
  expect(reducer({ open: false }, { type: CLOSE_MENU })).toEqual({ open: false })
  expect(reducer({ open: true }, { type: CLOSE_MENU })).toEqual({ open: false })
})

test('Should toggle menu', () => {
  let state = reducer(undefined, {})
  expect(state).toEqual({ open: false })
  state = reducer(state, { type: TOGGLE_MENU })
  expect(state).toEqual({ open: true })
  state = reducer(state, { type: TOGGLE_MENU })
  expect(state).toEqual({ open: false })
  state = reducer(state, { type: TOGGLE_MENU })
  expect(state).toEqual({ open: true })
  state = reducer(state, { type: TOGGLE_MENU })
  expect(state).toEqual({ open: false })
})
