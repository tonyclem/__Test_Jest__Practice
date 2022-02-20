const conditionNum = require("./conditionNum");

test("should first if x is greater than y", () => {
  expect(conditionNum(10, 9)).toBe(false);
});
