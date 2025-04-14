import { f33Sieve, f34IsPrimeNumber } from "./solution-u1";

describe("Sieve of eratosthenes", () => {
  it("Should work", () => {
    f33Sieve(13);
  });
  it("Is 5 prime nubmer", () => {
    expect(f34IsPrimeNumber(5)).toBe(true);
  });
});
