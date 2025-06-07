import { Soft0411 } from "./011-all-permutation";

describe("all permutations", () => {
  it("test", () => {
    const soft0411 = new Soft0411();
    console.log("solutionOne:");
    soft0411.solution("", ["a", "b", "c"]);
    console.log("solutionTwo:");
    soft0411.solutionTwo("abc", 0);
  });
});
