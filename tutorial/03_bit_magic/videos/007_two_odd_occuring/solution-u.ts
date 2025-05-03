/**
 * time: o(n^2)
 * space : o(1)
 * @param arrayOfNum
 * @returns
 */
export function twoOddOccuring(arrayOfNum: number[]): number[] {
  const result = [];
  for (let i = 0; i < arrayOfNum.length; i++) {
    let occuring = 0;
    for (let j = 0; j < arrayOfNum.length; j++) {
      if (arrayOfNum[i] === arrayOfNum[j]) {
        occuring++;
      }
    }
    if ((occuring & 1) === 1) {
      if (result.length + 1 <= 2) {
        result.push(arrayOfNum[i]);
      } else {
        return result;
      }
    }
    occuring = 0;
  }
  return result;
}
export function twoOddOccuring2(arrayOfNum: number[]): number[] {
  let x = arrayOfNum[0];
  for (let i = 0; i < arrayOfNum.length; i++) {
    x = x ^ arrayOfNum[i];
  }
  let k = x & ~(x - 1);
  let num1 = 0,
    num2 = 0;
  for (let i = 0; i < arrayOfNum.length; i++) {
    if ((arrayOfNum[i] & k) != 0) {
      num1 = num1 ^ arrayOfNum[i];
    } else {
      num2 = num2 ^ arrayOfNum[i];
    }
  }
  return [num1, num2];
}
