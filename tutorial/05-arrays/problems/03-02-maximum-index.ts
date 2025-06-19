class SoftP050303 {
  public static solution(arr: number[]): number {
    const valueIndexArray = [];
    for (let i = 0; i < arr.length; i++) {
      valueIndexArray.push([arr[i], i]);
    }
    valueIndexArray.sort((a, b) => a[0] - b[0]);
    let max = 0;
    let minIndex = valueIndexArray[0][1];
    for (let i = 1; i < valueIndexArray.length; i++) {
      max = Math.max(max, valueIndexArray[i][1] - minIndex);
      minIndex = Math.min(valueIndexArray[i][1], minIndex);
    }
    return max;
  }
}
console.log(SoftP050303.solution([34, 8, 10, 3, 2, 80, 30, 33, 1]));
