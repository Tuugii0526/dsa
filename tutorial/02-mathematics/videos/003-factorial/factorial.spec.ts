import { f8Factorial, f9Factorial } from "./factorial";

describe("Factorial", () => {
  it("SHould work f8", () => {
    expect(f8Factorial(3)).toBe(6);
  });
  it("SHould work f9", () => {
    expect(f9Factorial(3)).toBe(6);
  });
});
