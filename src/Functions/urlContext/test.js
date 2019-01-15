import urlContext, { scrubQuery } from './'

test('scrubQuery with query', () => {
  const result = scrubQuery('/abcdef?xyz')
  expect(result).toEqual('/abcdef')
})

test('scrubQuery without query', () => {
  const result = scrubQuery('/abcdef')
  expect(result).toEqual('/abcdef')
})

test('urlContext with match', () => {
  const result = urlContext('/abc', { params: {
    context: 'somecontext',
    contextId: 'abc123',
  } })
  expect(result).toEqual('/abc?ref=somecontext&id=abc123')
})

test('urlContext without match', () => {
  const result = urlContext('/abc')
  expect(result).toEqual('/abc')
})
