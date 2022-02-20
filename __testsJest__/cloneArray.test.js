const { expect } = require("@jest/globals");
const cloneArray = require("./cloneArray");

test("propertly clone array", () => {
  const array = [2, 2, 4, 5];
  expect(cloneArray(array)).toStrictEqual(array);
  expect(cloneArray(array)).not.toBe(array);
});
