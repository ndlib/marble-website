export default (terms, perpage, page, view) => {
  return `/search?terms=${terms}&perpage=${perpage}&page=${page}&view=${view}`
}
