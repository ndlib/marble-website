import typy from 'typy'

export default (url, match, additionalContext) => {
  const cleanUrl = scrubQuery(url)
  let urlContext = ''
  if (typy(match, 'params.context').isString) {
    urlContext = `?ref=${typy(match, 'params.context').safeString}&id=${typy(match, 'params.contextId').safeString}`
  }
  if (additionalContext) {
    additionalContext.forEach((context) => {
      urlContext += `&${context.label}=${context.value}`
    })
  }
  if (urlContext.indexOf('search') > -1) {
    let queryurl = match.params.location.href
    let queryterms = queryurl.slice(queryurl.lastIndexOf('?') + 1)
    urlContext += queryterms
  }
  return `${cleanUrl}${urlContext}`
}
export const scrubQuery = (url) => {
  const indexOfQuery = url.indexOf('?')
  if (indexOfQuery > -1) {
    if (url.indexOf('search') < 0) {
      return url.substring(0, indexOfQuery)
    }
  }
  return url
}
