class SoftP050303 {
  public static solution(arr: number[]) {
    const length = arr.length;
    const lMin = [];
    const rMax = [];
    lMin[0] = arr[0];
    rMax[length - 1] = arr[length - 1];
    for (let i = 1; i < length; i++) {
      lMin[i] = Math.min(lMin[i - 1], arr[i]);
    }
    for (let i = length - 2; i >= 0; i--) {
      rMax[i] = Math.max(arr[i], rMax[i + 1]);
    }
    let max = 0;
    let i = 0;
    let j = 0;
    while (i < length && j < length) {
      if (lMin[i] <= rMax[j]) {
        max = Math.max(max, j - i);
        j++;
      } else {
        i++;
      }
    }
    return max;
  }
}
console.log(SoftP050303.solution([34, 8, 10, 3, 2, 80, 30, 33, 1]));
