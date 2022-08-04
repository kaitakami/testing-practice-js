const { caesarCipher } = require('../caesar-cipher')

test('caesar cipher normal test', () => {
  expect(caesarCipher('HELLO', 23)).toBe('EBIIL')
})

test('down case', () => {
  expect(caesarCipher('hello', 23)).toBe('EBIIL')
})

test('upper case and down case mix', () => {
  expect(caesarCipher('ZebrA', 23)).toBe('WBYOX')
})

test('zero shift', () => {
  expect(caesarCipher('zebra', 0)).toBe('ZEBRA')
})

test('regular shift', () => {
  expect(caesarCipher('zebra', 5)).toBe('EJGWF')
})

test('maximum shift', () => {
  expect(caesarCipher('zebra', 25)).toBe('YDAQZ')
})

test('two words', () => {
  expect(caesarCipher('zebra eats', 17)).toBe('QVSIR VRKJ')
})

test('punctuation', () => {
  expect(caesarCipher('What\'s that', 17)).toBe('NYRK\'J KYRK')
})
