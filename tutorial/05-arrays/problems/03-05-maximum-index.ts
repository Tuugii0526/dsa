class Soft05P0305 {
  public static solution(arr: number[]) {
    const length = arr.length;
    const stack = [0];
    for (let i = 1; i < length; i++) {
      if (arr[i] <= arr[stack.length - 1]) {
        stack.push(i);
      }
    }
    let max = 0;
    for (let i = length - 1; i >= 0; i--) {
      while (stack.length > 0 && arr[i] >= arr[stack.length - 1]) {
        max = Math.max(max, i - stack[stack.length - 1]);
        stack.pop();
      }
    }
    return max;
  }
}
