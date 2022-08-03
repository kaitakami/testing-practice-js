const reverseString = require('../reverse-string')

test('normal test', () => {
  expect(reverseString('hello')).toBe('olleh')
})

test('empty string', () => {
  expect(reverseString('')).toBe('')
})

test('string with numbers', () => {
  expect(reverseString('noway32')).toBe('23yawon')
})

test('uppercase and lowercase', () => {
  expect(reverseString('NoSiR')).toBe('RiSoN')
})

test('just uppercase', () => {
  expect(reverseString('WHAT')).toBe('TAHW')
})

test('string with space', () => {
  expect(reverseString('this has spaces')).toBe('secaps sah siht')
})

test('empty space at start', () => {
  expect(reverseString('   hello')).toBe('olleh')
})

test('empty space at end', () => {
  expect(reverseString('hello     ')).toBe('olleh')
})

test('empty space and space between words', () => {
  expect(reverseString(' hello my man     ')).toBe('nam ym olleh')
})
