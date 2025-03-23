// 1.Sum of natural n numbers
function f1Sum(limit: number) {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    sum += i;
  }
  return sum;
}
console.log("f1Sum:", f1Sum(3));
function f2Sum(limit: number) {
  return (limit * (limit + 1)) / 2;
}
console.log("f2Sum:", f2Sum(3));

function f3Sum(limit: number) {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    for (let j = 1; j <= i; j++) {
      sum++;
    }
  }
  return sum;
}
console.log("f3Sum:", f3Sum(3));
