// Brian and Kernigham algorithm
export function countSetBits(N: number) {
  let res = 0;
  while (N > 0) {
    N = N & (N - 1);
    res++;
  }
  return res;
}
