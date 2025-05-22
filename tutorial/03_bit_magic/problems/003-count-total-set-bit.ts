// User function Template for javascript

/**
 * @param {Number} N
 * @returns {Number}
 */

export class CountTotalSetBits {
  bitsDic: Record<number, number> = {};
  constructor() {
    this.getBitsDic();
  }
  countSetBits(N: number) {
    let count = 0;
    for (let i = 1; i <= N; i++) {
      count += this.getBitCounts(i);
    }
    return count;
  }
  /**
   * 255 нь битээр 11111111.
   */
  getBitsDic() {
    this.bitsDic[0] = 0;
    for (let i = 1; i < 256; i++) {
      this.bitsDic[i] = this.bitsDic[i & (i - 1)] + 1;
    }
  }
  /**
   * 0xff нь 16 ийн тооллын систем бөгөөд 255 ажээ .
   * @param n
   * @returns
   */
  getBitCounts(n: number) {
    return (
      this.bitsDic[n & 0xff] +
      this.bitsDic[(n >> 8) & 0xff] +
      this.bitsDic[(n >> 16) & 0xff] +
      this.bitsDic[n >> 24]
    );
  }
}
export class CountTotalSetBits2 {
  // Function to return sum of count of set bits in the integers from 1 to n.
  static countSetBits(N: number) {
    // code here
    let cnt = 0;
    for (let i = 1; i <= N; i++) {
      let current = i;
      while (current) {
        if ((current & 1) == 1) {
          cnt++;
        }
        current = current >> 1;
      }
    }
    return cnt;
  }
}
/**
 * Зүйн дараалал байдаг ажээ . Үүнийг хэрэгжүүлэн бид асуудлыг шийдэх ажээ .
 * 1. i=0 эхлүүлэн бодоё .
 * 2. div гэх аргументийн 2т өгөх үлдэгдэлээс хамааран нэмэлт 1 битүүд байнуу эсэхийг мэдэе.
 * 3. тэгшхэн сууя
 * 4.яагаад
 * 5. Бид түрүүнд editorial ийн бодолтыг харлаа . Энд x гээд хувьсагч зарлаад арай өөр аргаар хийсэн байна .Яагаад 2 оос эхлэхийн бол ?
 * 6. Тэгш бол 1 байна .
 */
export class CountTotalSetBitsEfficient {
  // Function to return sum of count of set bits in the integers from 1 to n.
  countSetBits(N: number) {
    let cnt = 0;
    const powerOfTwoRounded = this.roundPowerOfTwo(N);
    N++;
    for (let i = 0; i <= powerOfTwoRounded; i++) {
      let interval = 1 << i;
      let div = Math.floor(N / interval);
      let remainder = N % interval;
      cnt += Math.floor(div / 2) * interval;
      if ((div & 1) == 1) {
        cnt += remainder;
      }
    }
    return cnt;
  }
  countSetBitsSecond(N: number) {
    N++;
    let cnt = 0;
    for (let i = 2; Math.floor(i / 2) < N; i *= 2) {
      let quotient = Math.floor(N / i);
      let remainder = N % i;
      cnt += Math.floor(i / 2) * quotient;
      if (remainder > i / 2) {
        cnt += remainder - i / 2;
      }
    }
    return cnt;
  }
  /**
   * I/T:
   * @param N
   */
  roundPowerOfTwo(N: number) {
    let power = 0;
    while (N >= 2) {
      N >>= 1;
      power++;
    }
    return power;
  }
}
// 2^2  2^1 2^0
// 0	0	0	0	0	0
// 1	0	0	0	0	1
// 2	0	0	0	1	0
// 3	0	0	0	1	1
// 4	0	0	1	0	0
// 5	0	0	1	0	1
// 6	0	0	1	1	0
// 7	0	0	1	1	1
// 8	0	1	0	0	0
// 9	0	1	0	0	1
// 10	0	1	0	1	0
// 11	0	1	0	1	1
// 12	0	1	1	0	0
// 13	0	1	1	0	1
// 14	0	1	1	1	0
// 15	0	1	1	1	1
// 16	1	0	0	0	0
export class FlipBits {
  solution(a: number, b: number) {
    let cnt = 0;
    let xor = a ^ b;
    while (xor > 0) {
      if ((xor & 1) == 1) {
        cnt++;
      }
      xor >>= 1;
    }
    return cnt;
  }
}
/**
 *1. Сүүлийн төгсгөлийг хйиж чадахгүй байгаа учраас алдаа гарж байгаа юм байна .
 2. Math.max DRY бичсэн байна . 
 */
export class ConsecutiveBits {
  maxConsecutiveOnes(N: number) {
    // code here
    let max = 0;
    let current = 0;
    while (N > 0) {
      if ((N & 1) == 1) {
        current++;
      } else {
        current = 0;
      }
      N >>= 1;
    }
    max = Math.max(max, current);
    return max;
  }
  maxConsecutiveBitsEffecient(N: number) {
    let cnt = 0;
    while (N > 0) {
      N = N & (N << 1);
      cnt++;
    }
    return cnt;
  }
}
export class MaxAnd {
  countPattern(arr: number[], N: number, pattern: number) {
    let cnt = 0;
    console.log("pattern:", pattern);

    for (let i = 0; i < N; i++) {
      if ((arr[i] & pattern) == pattern) {
        cnt++;
      }
    }
    return cnt;
  }
  // Function for finding maximum AND value.
  maxAND(arr: number[], N: number) {
    // your code here
    let max = 0;
    for (let i = 31; i >= 0; i--) {
      const count = this.countPattern(arr, N, max | (1 << i));
      if (count >= 2) {
        max |= 1 << i;
        console.log("max:", max);
      }
    }
    return max;
  }
}
// Хүнд зориулж код бичье .
// Хэрвээ та бусдад тайлбарлаж чадахгүй бол сайн ойлгоогүй гэсэн үг .
// Санаа аваад өөрсдөө бодоё .
