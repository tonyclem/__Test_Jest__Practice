const isBefore = require("./describle");

describe("isBefore", () => {
  it("should return true if the first date is before the second date", () => {
    const firstDate = new Date("20220217");
    const secondDate = new Date("30200202");

    expect(isBefore(firstDate, secondDate)).toBe(true);
  });

  it("should return false if the first date is after the second date", () => {
    const firstDate = new Date("20211202");
    const secondDate = new Date("23211202");

    expect(isBefore(secondDate, firstDate)).toBe(true);
  });
});
