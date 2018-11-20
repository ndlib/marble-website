import {
  openMenu,
  closeMenu,
  toggleMenu,
  OPEN_MENU,
  CLOSE_MENU,
  TOGGLE_MENU,
} from './'

test('openMenu', () => {
  expect(openMenu()).toEqual({ type: OPEN_MENU })
})
test('closeMenu', () => {
  expect(closeMenu()).toEqual({ type: CLOSE_MENU })
})
test('toggleMenu', () => {
  expect(toggleMenu()).toEqual({ type: TOGGLE_MENU })
})
