//User function Template for javascript
/**
 * @param {number} A
 * @param {number} B
 * @param {number} N
 * @returns {number}
 */
class Solution49 {
  termOfGP(A: number, B: number, N: number) {
    const q = B / A;
    return A * Math.pow(q, N - 1);
  }
}
