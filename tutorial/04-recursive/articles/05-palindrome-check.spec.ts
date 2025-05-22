import { soft0405 } from "./05-palindrome-check";

describe("palindrome check", () => {
  it("pali", () => {
    const test1 = "h";
    expect(soft0405("h", 0, test1.length - 1)).toBe(true);
    const test2 = "hi";
    expect(soft0405(test2, 0, test2.length - 1)).toBe(false);
    const test3 = "hih";
    expect(soft0405(test3, 0, test3.length - 1)).toBe(true);
  });
});
