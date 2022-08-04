const { add, subtract, divide, multiply } = require('../calculator')

// Add() test
test('normal add test', () => {
  expect(add(3, 4)).toEqual(7)
})

test('negative test sum', () => {
  expect(add(-3, 4)).toEqual(1)
})

test('add 0', () => {
  expect(add(0, 4)).toEqual(4)
})

test('add 0 to 0', () => {
  expect(add(0, 0)).toEqual(0)
})

test('float number add', () => {
  expect(add(1.2, 4.1)).toEqual(5.3)
})

// subtract() test
test('normal subtract test', () => {
  expect(subtract(3, 4)).toEqual(-1)
})

test('negative test sum', () => {
  expect(subtract(-3, 4)).toEqual(-7)
})

test('subtract 0', () => {
  expect(subtract(0, 4)).toEqual(-4)
})

// divide() test
test('normal divide test', () => {
  expect(divide(8, 2)).toEqual(4)
})

test('divide 0', () => {
  expect(divide(8, 0)).toEqual(0)
})

test('divide negative number', () => {
  expect(divide(-10, 2)).toEqual(-5)
})

test('divide float number', () => {
  expect(divide(2.5, 2)).toEqual(1.25)
})

// multiply() test
test('normal multiply test', () => {
  expect(multiply(8, 2)).toEqual(16)
})

test('multiply 0', () => {
  expect(multiply(8, 0)).toEqual(0)
})

test('multiply negative number', () => {
  expect(multiply(-10, 2)).toEqual(-20)
})

test('multiply float number', () => {
  expect(multiply(5.5, 2)).toEqual(11)
})
