import { MANIFEST_BASE_URL } from 'Configurations/apis'

export default (atId) => {
  if (atId.indexOf('/collection/') > -1) {
    return `/${atId.replace(`${MANIFEST_BASE_URL}`, '')}`
  } else {
    return `/item/${atId.replace(`${MANIFEST_BASE_URL}`, '').replace('/manifest', '')}`
  }
}
