const { expect } = require("@jest/globals");
const sum = require("./sum");

test("should first add two number", () => {
  expect(sum(15, 2)).toBe(17);
});
