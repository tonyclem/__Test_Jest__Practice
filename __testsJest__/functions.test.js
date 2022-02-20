const functions = require("./functions");

// beforeEach(() => intiDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => intiDatabase());
// afterAll(() => closeDatabase());

// const intiDatabase = () => console.log("Database Initialized...");
// const closeDatabase = () => console.log("Database close...");

const nameCheck = () => console.log("Checking Name....");

describe("Checking Name", () => {
  beforeEach(() => nameCheck());

  test("User is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });

  test("User is Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });
});

test("add 2 + 2 equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("add 2 + 2 Not equal 4", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// to falsy
test("Should be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

test("Should be Person name object", () => {
  expect(functions.createUser()).toStrictEqual({
    firstName: "Clement",
    lastName: "Anthony",
  });
});

// less than and greater than
test("should be under 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//  Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

//  Arrays
test("Admin Should be in userName", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// Working with async data
// test("User fetched name should be Leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fetchUser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

// Async Await
test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
