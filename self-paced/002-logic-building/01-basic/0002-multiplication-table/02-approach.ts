function printTable02(n: number, times: number) {
  if (times > 10) {
    return;
  }
  console.log(`${n}*${times}=${n * times}`);
  times++;
  printTable02(n, times);
}
printTable02(5, 1);

//t-complexity  o(1)
//s-complexity o(1)
