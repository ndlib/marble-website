export default (terms, perpage, page, view) => {
  // Note we are sanitizing user input with encodeURIComponent
  return `/search?terms=${encodeURIComponent(terms)}&perpage=${perpage}&page=${page}&view=${view}`
}
