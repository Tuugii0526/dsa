import { f41IterativePower, f42IterativePowerOptimized } from "./solution-u";

describe("011-iterative-power", () => {
  it("test", () => {
    console.log(f41IterativePower(3, 0));
  });
  it("test2", () => {
    console.time("hi");
    expect(f42IterativePowerOptimized(3, 2)).toBe(9);
    console.timeEnd("hi");
  });
});
