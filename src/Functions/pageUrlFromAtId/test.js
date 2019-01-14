import pageUrlFromAtId from './'
import { MANIFEST_BASE_URL } from 'Configurations/apis'

test('collection in @id url', () => {
  expect(pageUrlFromAtId(`${MANIFEST_BASE_URL}collection/abc`)).toEqual('/collection/abc')
})

test('collection NOT in @id url', () => {
  expect(pageUrlFromAtId(`${MANIFEST_BASE_URL}abc/manifest`)).toEqual('/item/abc')
})
