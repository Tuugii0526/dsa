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
