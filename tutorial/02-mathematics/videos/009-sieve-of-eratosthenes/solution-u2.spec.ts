import { f35Sieve, f36IsPrimeNumber } from "./solution-u2";

describe("Sieve of eratosthenes", () => {
  it("Test", () => {
    f35Sieve(3);
  });
  it("Should sieve work", () => {
    f35Sieve(18);
  });
});
