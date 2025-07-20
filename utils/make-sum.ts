function makeSum(...args: number[]) {
  return args.reduce((acc, el) => acc + el, 0);
}
console.log(makeSum(6420, 11000, 37400, 7000, 14800, 2600, 3500, 15000, 7000));
