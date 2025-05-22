/**
 * print all the subsets
 * @param str
 */
export function soft0408(str: string, index: number, curr: string) {
  let strLength = str.length;
  if (strLength == index) {
    console.log(curr);
    return;
  }
  soft0408(str, index + 1, curr);
  soft0408(str, index + 1, curr + str[index]);
}
