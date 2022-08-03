const capitalizeString = require('../capitalize')

test('empty string', () => {
  expect(capitalizeString('')).toBe('')
})

test('uppercase string', () => {
  expect(capitalizeString('WHAT')).toBe('What')
})

test('downcase string', () => {
  expect(capitalizeString('whats')).toBe('Whats')
})

test('string with punctuation', () => {
  expect(capitalizeString("what's")).toBe("What's")
})

test('random string', () => {
  expect(capitalizeString('fjl;adsjoi')).toBe('Fjl;adsjoi')
})

test('empty space at start', () => {
  expect(capitalizeString('   hi')).toBe('Hi')
})

test('empty space at end', () => {
  expect(capitalizeString('zebra     ')).toBe('Zebra')
})
