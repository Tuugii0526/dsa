export function oneOddOccuring(arrayOfNum: number[]): number | null {
  const occurenceDictionary: Record<number, number> = {};
  for (const number of arrayOfNum) {
    occurenceDictionary[number] = (occurenceDictionary[number] || 0) + 1;
  }
  for (const [key, value] of Object.entries(occurenceDictionary)) {
    if ((value & 1) === 1) {
      return Number(key);
    }
  }
  return null;
}
// хor
// 100 ^ 000  000
/**
 * time : θ(n)
 * space 0(1)
 * @param arrayOfNum
 * @returns
 */
export function oneOddOccuring2(arrayOfNum: number[]): number | null {
  let res = arrayOfNum[0];
  for (let i = 1; i < arrayOfNum.length; i++) {
    res = res ^ arrayOfNum[i];
  }
  return res;
}
