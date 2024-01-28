const endsWith = require('./index');

test('return true if the first string ends with the second one', () => {
  expect(endsWith('abc', 'bc')).toBe(true);
});

test('return false if the first string does not end with the second one', () => {
  expect(endsWith('abc', 'd')).toBe(false);
});