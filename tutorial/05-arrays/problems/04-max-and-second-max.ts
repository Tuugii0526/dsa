class Soft05p04 {
  solution(arr: number[]) {
    let max = 0;
    let secMax = -1;
    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        secMax = max;
        max = arr[i];
      } else {
        if (arr[i] != max) {
          secMax = Math.max(secMax, arr[i]);
        }
      }
    }
    return [max, secMax];
  }
}
