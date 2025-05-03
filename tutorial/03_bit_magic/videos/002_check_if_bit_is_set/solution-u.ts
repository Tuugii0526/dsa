export function isSet(n: number, k: number) {
  let x = 1;
  for (let i = 0; i < k - 1; i++) {
    x *= 2;
  }
  if ((n & x) != 0) {
    console.log("Kth bit is set");
  }
}
export function isSet2(n: number, k: number) {
  console.log(n.toString(2));
  let x = 1 << (k - 1);
  if ((n & x) != 0) {
    return true;
  }
  return false;
}
export function isSet3(n: number, k: number) {
  let x = n >> (k - 1);
  if ((x & 1) != 0) {
    return true;
  }
  return false;
}
