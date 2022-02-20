const items = require("./condition");

test("should first add", () => {
  expect(items(5, 5)).toBe(25);
});
