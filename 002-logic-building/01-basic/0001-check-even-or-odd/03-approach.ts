function isEven(n: number) {
  // >> n  means it will be divided by 2^n , << n means it will be multipied by 2^n . Besides , when right shifting , it ignores remainder.
  if (n == (n >> 1) << 1) {
    return true;
  }
  return false;
}
