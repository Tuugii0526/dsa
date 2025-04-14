import { f7Palindrome } from "./palindrome";
const tests = [99999999999, 4554, 8998, 0];
describe("Palindrome", () => {
  it("Simple test", () => {
    expect(f7Palindrome(22)).toBe(true);
  });
  it("Should work correctly", () => {
    for (const test of tests) {
      expect(f7Palindrome(test));
    }
  });
});
