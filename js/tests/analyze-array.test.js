const { analyzeArray } = require('../analyze-array')

test('normal test (Example 1)', () => {
  const object = analyzeArray([1, 2, 3, 4])
  expect(object).toEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4
  })
})

test('normal test (Example 2)', () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6])
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
})

test('normal test (Example 3)', () => {
  const object = analyzeArray([2, 16, 6, 8, 4, 12])
  expect(object).toEqual({
    average: 8,
    min: 2,
    max: 16,
    length: 6
  })
})

test('float numbers', () => {
  const object = analyzeArray([2.5, 7.5])
  expect(object).toEqual({
    average: 5,
    min: 2.5,
    max: 7.5,
    length: 2
  })
})

test('float numbers', () => {
  const object = analyzeArray([2.5, 7.5])
  expect(object).toEqual({
    average: 5,
    min: 2.5,
    max: 7.5,
    length: 2
  })
})

test('', () => {
  const object = analyzeArray([-5, -10, -15])
  expect(object).toEqual({
    average: -10,
    min: -15,
    max: -5,
    length: 3
  })
})
