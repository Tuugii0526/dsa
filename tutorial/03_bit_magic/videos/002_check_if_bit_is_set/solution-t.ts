export function isSet(N: number, Kth: number) {
  let x = 1;
  for (let i = 0; i < Kth - 1; i++) {
    x *= 2;
  }
  if ((N & x) != 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
// left shift operator will increase the number, while right shift operator will decrease the number
export function isSet2(N: number, Kth: number) {
  let x = 1 << (Kth - 1);
  if ((N & x) != 0) {
    console.log("Kth bit is set");
  } else {
    console.log("Kth gbit is not set");
  }
}
export function isSet3(N: number, Kth: number) {
  let x = N >> (Kth - 1);
  if ((N & x) != 0) {
    console.log("Kth bit is set");
  } else {
    console.log("Kth bit is not set");
  }
}
