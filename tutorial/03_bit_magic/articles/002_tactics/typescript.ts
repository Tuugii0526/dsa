/**
 *
 * @param {number} num
 * @param {number} position
 * @returns {number}
 */
function setBit(num: number, position: number): number {
  if (!Number.isInteger(position) || position < 1) {
    throw new Error("Position must be a integer");
  }
  // binary of decimal 1 is 1.
  const mask = 1 << (position - 1);
  const result = num | mask;
  return result;
}
/**
 *
 * @param {number} num
 * @param {number} position
 * @returns {number}
 */
function unsetBit(num: number, position: number): number {
  if (!Number.isInteger(num) || position < 1) {
    throw new Error("Position must be integer");
  }
  const mask = 1 << (position - 1);
  const notMask = ~mask;
  const result = notMask & num;
  return result;
}
/**
 *
 * @param {number} num
 * @param {number} position
 * @returns {number}
 */
function toggleBit(num: number, position: number): number {
  if (!Number.isInteger(num) || position < 1) {
    throw new Error("Position must be integer");
  }
  const mask = 1 << (position - 1);
  const result = mask ^ num;
  return result;
}
function isBitSet(num: number, position: number): boolean {
  if (!Number.isInteger(num) || position < 1) {
    throw new Error("Position must be integer");
  }
  const mask = 1 << (position - 1);
  if ((num & mask) > 0) return true;
  return false;
}
function divideByTwo(num: number, powerOfTwo: number) {
  if (!Number.isInteger(num) || powerOfTwo < 1) {
    throw new Error("Position must be integer");
  }
  return num >> powerOfTwo;
}
function multiplyByTwo(num: number, powerOfTwo: number) {
  if (!Number.isInteger(num) || powerOfTwo < 1) {
    throw new Error("Position must be integer");
  }
  return num << powerOfTwo;
}
function log2(num: number): number {
  let res = 0;
  while ((num >>= 1)) {
    res++;
  }
  return res;
}
/**
 * xor operator ашиглан хоёр тоо сольж болдог ажээ
 * @param num1
 * @param num2
 */
function swapTwoNumber(num1: number, num2: number) {
  console.log("num1:", num1);
  console.log("num2:", num2);
  num1 ^= num2;
  num2 ^= num1;
  num1 ^= num2;
  console.log("num1:", num1);
  console.log("num2:", num2);
}
/**
 * Тухайн тооноос 1 ийг хасахад хамгийн сүүлчийн 1ийн бит өөрөө орон 0 ийн бит болдог ажээ . Энэхүү чанрыг brian kernigham ийн алгоритмд ашиглан 2 тийн тоонд хэдэн 1 ийн бит байгааг тоолдог .
 *Бид үүнийг ашиглан тухайн тоо 2 ийн зэрэг мөн үү эсэхийг тооцож байгаа .
 * @param num
 * @returns
 */
function isPowerOfTwo(num: number) {
  const minusOneNum = num - 1;
  return (num & minusOneNum) == 0;
}
/**
 *
 * @param num
 * @returns
 */
function mostSignificantBit(num: number) {
  const mostP = log2(num);
  return 1 << mostP;
}
function countSetBits(num: number) {
  let count = 0;
  while (num > 0) {
    count += num & 1;
    num >>= 1;
  }
  return count;
}
/**
 *
 * @param num
 * @returns
 * o(logn)
 */
function brianKernighan(num: number): number {
  let count = 0;
  while (num > 0) {
    num = num & (num - 1);
    count++;
  }
  return count;
}
// Дээрх brianKernighan ийн алгоритмыг ашиглаад 1 ийн битийг тоолоход log(n) хугацаа зориулна .
// Үүний оронд тухайн 8 8 битээр хуваагаад 8 битийн тоог hash table -д хадгалая гэж бодоё .
// const num=i & (i - 1)  . Эндээс num нь decimal байна .Бид үүнийг i-1 тэй андуураад байжээ .
function hashTableOfSetBits256(): Record<number, number> {
  const dic: Record<number, number> = {};
  dic[0] = 0;
  for (let i = 1; i < 256; i++) {
    dic[i] = dic[i & (i - 1)] + 1;
  }
  return dic;
}
/**
 * Бид бит толь бичгийг ашиглахдаа 256 хүртэл тоо оруулах ажээ .
 * Бид 24 бит баруун тийш шилжүүлэхдээ 255 аар bitwise and хийх шаардлагагүй ажээ .
 * Бид аравтын тооллын 255 ийг 16 тын тооллын систем рүү хувиргаад бичвэл 0xff . 0x нь 16 тын тооллын систем шүү гэж хэлж байгаа ажээ .
 * @param num
 * @returns
 */
function countSetBitsUsingHashTable(num: number): number {
  const dic = hashTableOfSetBits256();
  return (
    dic[num & 0xff] +
    dic[(num >> 8) & 0xff] +
    dic[(num >> 16) & 0xff] +
    dic[num >> 24]
  );
}
function getOddOccuring(arr: number[]): number {
  let oddOne = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    oddOne = oddOne ^ arr[i + 1];
  }
  return oddOne;
}
/**
 * bitwise xor оператор гэж юу вэ ?
 *0 ^ 0 = 0 
 1 ^ 1 = 0 
0 ^ 1 = 1
1 ^ 0 = 1
 * @param arr
 */
function getTwoOddOccuring(arr: number[]): number[] {
  let xor = 0;
  let res1 = 0;
  let res2 = 0;
  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
  }
  const sn = xor & ~(xor - 1);
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] & sn) != 0) {
      res1 = res1 ^ arr[i];
    } else {
      res2 = res2 ^ arr[i];
    }
  }
  return [res1, res2];
}
const powerSet = (s: string) => {
  const stringLength = s.length;
  const limit = 1 << stringLength;
  for (let i = 0; i < limit; i++) {
    const arr = [];
    for (let j = 0; j < stringLength; j++) {
      if ((i & (1 << j)) != 0) {
        arr.push(s[j]);
      }
    }
    console.log(arr);
  }
};
/**
 * time: O(n^2)
 * @param numbers
 * @returns
 */
const maxAnd = (numbers: number[]): number => {
  let res = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      res = Math.max(res, numbers[i] & numbers[j]);
    }
  }
  return res;
};
export {
  setBit,
  unsetBit,
  toggleBit,
  isBitSet,
  divideByTwo,
  multiplyByTwo,
  log2,
  swapTwoNumber,
  isPowerOfTwo,
  mostSignificantBit,
  brianKernighan,
  hashTableOfSetBits256,
  countSetBits,
  countSetBitsUsingHashTable,
  getOddOccuring,
  getTwoOddOccuring,
  powerSet,
  maxAnd,
};
