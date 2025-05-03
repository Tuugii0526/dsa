export function powerSet(target: string) {
  let length = target.length;
  let limit = 1 << length;
  for (let i = 0; i < limit; i++) {
    let string = "";
    for (let j = 0; j < length; j++) {
      if ((1 & (i >> j)) !== 0) {
        string += target[j];
      }
    }
    console.log(string);
  }
}
