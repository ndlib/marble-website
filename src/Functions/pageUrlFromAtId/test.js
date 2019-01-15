import pageUrlFromAtId from './'
import { MANIFEST_BASE_URL } from 'Configurations/apis'
import {
  COLLECTION_CONTEXT,
  ITEM_CONTEXT,
} from 'Constants/viewingContexts'
test('collection in @id url', () => {
  expect(pageUrlFromAtId(`${MANIFEST_BASE_URL}collection/abc`)).toEqual(`/${COLLECTION_CONTEXT}/abc`)
})

test('collection NOT in @id url', () => {
  expect(pageUrlFromAtId(`${MANIFEST_BASE_URL}abc/manifest`)).toEqual(`/${ITEM_CONTEXT}/abc`)
})
