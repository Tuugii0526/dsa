function app01(n: number, m: number) {
  const absoluteN = Math.abs(n);
  const absoluteM = Math.abs(m);
  return Math.sign(n) * getClosest(absoluteN, absoluteM);
}
export function getClosest(n: number, m: number) {
  const quotient = n / m;
  const downQuotient = Math.floor(quotient);
  const upQuotient = Math.ceil(quotient);
  if (quotient - downQuotient == 0.5) {
    return upQuotient * m;
  }
  return Math.round(quotient) * m;
}
console.log(app01(13, 4));
