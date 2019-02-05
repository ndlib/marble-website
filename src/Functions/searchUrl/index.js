export default (terms, perpage, page, view) => {
  return `/search?terms=${encodeURIComponent(terms)}&perpage=${perpage}&page=${page}&view=${view}`
}
