import { Solution46 } from "./solution-t";
import { Solution45 } from "./solution-u";

describe("Digits in factorial", () => {
  it("Test", () => {
    const solution = new Solution45();
    console.log(solution.digitsInFactorial(42));
  });
  it("Teacher test", () => {
    const solution = new Solution46();
    console.log(
      "The digit count offactorial of 3 is ",
      solution.digitsInFactorial(5)
    );
  });
});
