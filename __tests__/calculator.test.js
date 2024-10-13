const add = require('../calculator')

test('should return 0 for empty string input', () => {
  expect(add("").tobe(0));
});