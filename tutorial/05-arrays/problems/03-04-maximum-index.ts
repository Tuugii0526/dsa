class SoftP050304 {
  public static solution(arr: number[]) {
    const lenght = arr.length;
    const rMax = [];
    rMax[lenght - 1] = arr[lenght - 1];
    for (let i = lenght - 2; i >= 0; i--) {
      rMax[i] = Math.max(rMax[i + 1], arr[i]);
    }
    console.log(rMax);

    let i = 0,
      j = 0,
      max = 0,
      minEl = arr[0];
    while (i < lenght && j < lenght) {
      if (minEl <= rMax[j]) {
        max = Math.max(max, j - i);
        j++;
      } else {
        if (i + 1 < lenght) {
          i++;
          minEl = Math.min(minEl, arr[i]);
        }
      }
    }
    return max;
  }
}
console.log(SoftP050304.solution([34, 8, 10, 3, 2, 80, 30, 33, 1]));
