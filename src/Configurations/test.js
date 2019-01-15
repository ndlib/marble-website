import {
  DEFAULT_FONTFAMILY,
  DEFAULT_FONTSIZE,
  INSTITUTION_MAIN_COLOR,
  INSTITUTION_TEXTCOLOR,
  NAVIGATION_MAIN_COLOR,
  NAVIGATION_TEXT_COLOR,
  INSTITUTION_LOGO,
  SITE_LOGO,
  INNER_PAGE_WIDTH,
  SIDEBAR_WIDTH,
} from './styles.js'

test('the defined variables exist', () => {
  expect(typeof DEFAULT_FONTFAMILY === 'string').toBeTruthy()
  expect(typeof DEFAULT_FONTSIZE === 'string').toBeTruthy()
  expect(typeof INSTITUTION_MAIN_COLOR === 'string').toBeTruthy()
  expect(typeof INSTITUTION_TEXTCOLOR === 'string').toBeTruthy()
  expect(typeof NAVIGATION_MAIN_COLOR === 'string').toBeTruthy()
  expect(typeof NAVIGATION_TEXT_COLOR === 'string').toBeTruthy()
  expect(typeof INSTITUTION_LOGO === 'string').toBeTruthy()
  expect(typeof SITE_LOGO === 'string').toBeTruthy()
  expect(typeof INNER_PAGE_WIDTH === 'string').toBeTruthy()
  expect(typeof SIDEBAR_WIDTH === 'string').toBeTruthy()
})
