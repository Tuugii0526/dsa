import { Soft0412 } from "./12-subset-sum";

describe("Subset sum", () => {
  it("solution1", () => {
    const soft0412 = new Soft0412();
    const test1 = [10, 5, 2, 3, 6];
    const test2 = [1, 2, 3];
    expect(soft0412.solution(test1, test1.length, 8)).toBe(2);
    expect(soft0412.solution(test2, test2.length, 4)).toBe(1);
  });
  it("solution2", () => {
    const soft0412 = new Soft0412();
    const test1 = [10, 5, 2, 3, 6];
    const test2 = [1, 2, 3];
    expect(soft0412.solution2(test1, test1.length, 8)).toBe(2);
    expect(soft0412.solution2(test2, test2.length, 4)).toBe(1);
  });
});
