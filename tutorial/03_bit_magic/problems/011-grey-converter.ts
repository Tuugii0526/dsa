//what is grey ?
class GreyConverter {
  //  Function to find the gray code of given number n
  grayConverter(n: number) {
    // code here

    let msbIndex = this.getMSB(n);
    let greyN = 1 >> msbIndex;
    while (msbIndex - 1 > 0) {
      let first = n >> msbIndex;
    }
  }
  getMSB(n: number) {
    let cnt = 0;
    while (n > 0) {
      cnt++;
      n >>= 1;
    }
    return cnt;
  }
}
