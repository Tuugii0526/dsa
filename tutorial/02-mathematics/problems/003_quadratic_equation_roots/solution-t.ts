export class Solution43 {
  quadraticRoots(a: number, b: number, c: number) {
    const roots = new Array();
    let root1, root2;
    const discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant < 0) {
      roots.push(-1);
    } else {
      root1 = Math.floor(-b + Math.sqrt(discriminant));
      root2 = Math.floor(-b - Math.sqrt(discriminant));
      roots.push(Math.max(root1, root2));
      roots.push(Math.min(root1, root2));
    }
    return roots;
  }
}
