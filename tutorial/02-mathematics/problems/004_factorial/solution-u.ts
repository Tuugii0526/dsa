//User function Template for javascript
/**
 * @param {number} N
 * @returns {number}
 */
class Solution43 {
  factorial(N: number) {
    if (N == 0) return 1;
    let factorial = 1;
    for (let i = 1; i <= N; i++) {
      factorial *= i;
    }
    return factorial;
  }
}
