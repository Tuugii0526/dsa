function sum01(limit: number) {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    sum += i;
  }
  return sum;
}
console.time("time");
console.log(sum01(10000));
console.timeEnd("time");

//0.314ms
//s-c  o(n)
//t-c o(1)
