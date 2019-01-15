import { MANIFEST_BASE_URL } from 'Configurations/apis'
import {
  COLLECTION_CONTEXT,
  ITEM_CONTEXT,
} from 'Constants/viewingContexts'

export default (atId) => {
  if (atId.indexOf('/collection/') > -1) {
    return `/${atId.replace(`${MANIFEST_BASE_URL}`, '').replace('/collection/', `/${COLLECTION_CONTEXT}/`)}`
  } else {
    return `/${ITEM_CONTEXT}/${atId.replace(`${MANIFEST_BASE_URL}`, '').replace('/manifest', '')}`
  }
}
