const isAnagram = require("./anagram");

test("isAnagram function exists", () => {
  expect(typeof isAnagram).toEqual("function");
});

test("Dormitory is an anagram of dirt room## exists", () => {
  expect(isAnagram("Dormitory", "Dirty room##")).toBeTruthy();
});

test("cinema is an anagram of ice man", () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});

test("Hello is Not an anagram of Aloha", () => {
  expect(isAnagram("Hello", "aloha")).toBeFalsy();
});
