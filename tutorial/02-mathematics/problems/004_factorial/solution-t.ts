/**
 *
 */
class Solution44 {
  factorial(N: number) {
    let factorial = 1;
    for (let i = 2; i <= N; i++) {
      factorial *= i;
    }
    return factorial;
  }
}
