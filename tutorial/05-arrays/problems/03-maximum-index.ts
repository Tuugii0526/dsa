class SoftP0503 {
  static binary(dec: number[], arr: number[], current: number): number {
    let start = 0;
    let end = dec.length - 1;
    let res = dec[dec.length - 1];
    while (start <= end) {
      const mid = start + Math.floor((end - start) / 2);
      if (current < arr[dec[mid]]) {
        start = mid + 1;
      } else {
        end = mid - 1;
        res = dec[mid];
      }
    }
    return res;
  }
  static solution(arr: number[]) {
    const dec: number[] = [0];
    let max: number = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[dec[dec.length - 1]]) {
        dec.push(i);
      } else {
        const minIndex = SoftP0503.binary(dec, arr, arr[i]);
        max = Math.max(max, i - minIndex);
      }
    }
    return max;
  }
}

console.log("ans", SoftP0503.solution([34, 8, 10, 3, 2, 80, 30, 33, 1]));
