const analyzeArray = require('../analyzeArray')

test('normal test', () => {
  const object = analyzeArray(1, 2, 3, 4)
  expect(object).toEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4
  })
})