export function countSetBits(N: number) {
  let setBitCount = 0;
  while (N > 0) {
    if (N % 2 != 0) {
      setBitCount++;
    }
    N = Math.floor(N / 2);
  }
  return setBitCount;
}
// first pluc then divide
export function countSetBits2(N: number) {
  let res = 0;
  while (N > 0) {
    res = res + (res & 1);
    res = res >> 1;
  }
}
/**
 *
 * @param N
 * @returns
 */
export function countSetBits1(N: number) {
  let setBitCount = 0;
  while (N > 0) {
    N = N >> 1;
    if ((N & 1) != 0) {
      setBitCount++;
    }
  }
  return setBitCount;
}
/**
 * idea : traverse only through the set bits
 * time θ(set bits)
 * @param N number
 */
export function countSetBits3(N: number) {
  let res: number = 0;
  while (N > 0) {
    // this step should make the last set bit as 0.
    N = N & (N - 1);
    res++;
  }
}
/**
 * LOOK UP TABLE
 * Assumption :We have 32 bit numbers
 * precompute counts for 8 bit numbers (0 to 255)
 * @param N
 */
export function countSetBits4(N: number) {
  const tbl = bitSetsDictionary();
  return (
    tbl[N & 255] + tbl[(N >> 8) & 255] + tbl[(N >> 16) & 255] + tbl[N >> 24]
  );
}
/**
 *Brian and kerningham algorithm
 */
export function bitSetsDictionary(): Record<number, number> {
  const dictionary: Record<number, number> = {};
  dictionary[0] = 0;
  for (let i = 1; i <= 255; i++) {
    dictionary[i] = dictionary[i & (i - 1)] + 1;
  }
  return dictionary;
}
