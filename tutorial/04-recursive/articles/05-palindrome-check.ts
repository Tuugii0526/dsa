/**
 *
 * @param str
 * @param s
 * @param e
 * @returns
 */
export function soft0405(str: string, s: number, e: number): boolean {
  if (str.length == 1) return true;
  if (str[s] !== str[e]) return false;
  if (s < e - 1) {
    return soft0405(str, s + 1, e - 1);
  }
  return true;
}
