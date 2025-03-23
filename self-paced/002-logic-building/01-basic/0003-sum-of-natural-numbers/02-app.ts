function sum02(limit: number) {
  const sum = (limit * (limit + 1)) / 2;
  return sum;
}
console.time("time");
console.log(sum02(10000));
console.timeEnd("time");
//0.286ms
//s-c o(1)
//t-c o(1)
