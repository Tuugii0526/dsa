class MergeSort {
  private _sort(arr: number[], left: number, right: number) {
    if (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      this._sort(arr, left, mid);
      this._sort(arr, mid + 1, right);
      this._merge(arr, left, mid, right);
    }
  }
  private _merge(arr: number[], left: number, mid: number, right: number) {
    let i = 0,
      j = 0,
      current = left;
    const temp1 = arr.slice(left, mid + 1);
    const temp2 = arr.slice(mid + 1, right + 1);
    const temp1Length = temp1.length;
    const temp2Length = temp2.length;
    while (i < temp1Length && j < temp2Length) {
      if (temp1[i] < temp2[j]) {
        arr[current] = temp1[i];
        i++;
      } else {
        arr[current] = temp2[j];
        j++;
      }
      current++;
    }
    while (i < temp1Length) {
      arr[current] = temp1[i];
      i++;
      current++;
    }
    while (j < temp2Length) {
      arr[current] = temp2[j];
      j++;
      current++;
    }
  }
  public sort(arr: number[]) {
    this._sort(arr, 0, arr.length - 1);
  }
}
const soft = new MergeSort();
const arr = [4, 3, 2, 1, 7, 8];
soft.sort(arr);
console.log(arr);
