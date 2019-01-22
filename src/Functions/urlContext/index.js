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
  //
  // TODO check url for 'search' and query string and return
  // ref=search&q=[ACTUAL QUERY STRING]
  //
  return `${cleanUrl}${urlContext}`
}

export const scrubQuery = (url) => {
  const indexOfQuery = url.indexOf('?')
  if (indexOfQuery > -1) {
    return url.substring(0, indexOfQuery)
  }
  return url
}
