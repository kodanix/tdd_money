const hello = require('./greetings');

test('Should return with: Hello, my friend.', () => {
  expect(hello([])).toBe("Hello, my friend.");
});

test('Should return with: Hello, Bob.', () => {
  expect(hello(["Bob"])).toBe("Hello, Bob.");
});

test('Should return with: Hello, Alice, Bob and Jerry', () => {
  expect(hello(["Alice", "Bob", "Jerry"])).toBe("Hello, Alice, Bob and Jerry.");
});

test('Should return with: Hello, Alice, Bob and Jerry', () => {
  expect(hello(["Alice", "Bob"])).toBe("Hello, Alice and Bob.");
});

test('Handle one shout', () => {
  expect(hello(['BARRY'])).toBe("HELLO BARRY!");
});

test('Handle multiple shouts', () => {
  expect(hello(['JAY', 'Maya', 'Alice', 'BOB', 'Charlotte'])).toBe("Hello, Maya, Alice, and Charlotte. AND HELLO JAY, AND BOB!");
});

test('Split name with commas', () => {
  expect(hello(['Jerry', 'Alice, Bob'])).toBe("Hello, Jerry, Alice, and Bob.");
});