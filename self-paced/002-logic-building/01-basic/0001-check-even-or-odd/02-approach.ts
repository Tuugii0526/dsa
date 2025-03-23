function isEven(n: number) {
  // odd number is left 1 for bitwise and operator
  if ((n & 1) == 1) {
    return false;
  }
  return true;
}
