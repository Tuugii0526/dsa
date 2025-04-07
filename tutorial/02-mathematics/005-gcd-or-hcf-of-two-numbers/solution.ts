export function f13GCD(a: number, b: number): number {
  if (!(a > 0 && b > 0)) {
    throw new Error("A and B should be greater than 0");
  }
  const min = Math.min(a, b);
  for (let i = min; i > 1; i++) {
    if (a % i == 0 && b % i == 0) {
      return i;
    }
  }
  return 1;
}
//Time complexity O(min(a,b))

export function f14GCD(a: number, b: number): number {
  if (!(a > 0 && b > 0)) {
    throw new Error("A and B should be greater than 0");
  }
  let min = Math.min(a, b);
  while (min > 0) {
    if (a % min == 0 && b % min == 0) {
      break;
    }
    min--;
  }
  return min;
}
//Time complexity O(min(a,b))

//Бид одоо хамгийн бага хуваагчийг эвклидийн алгоритмоор олох болно . Энэхүү алгоритмын гол санаа нь
// Танд b нь а аас бага байх хоёр тоо байя гэе . Энэ тохиолдолд ХБЕХ(a,b)=ХБЕХ(a-b,b) юм байна .
// a=10 b=5 гэе ХБЕХ(10,5)=ХБЕХ(5,5)
//a= 34 b=8 гэе . (34,8)=(26,8) (26,8)=(18,8) (18,8)=(10,8) (10,8)=(8,2) (8,2)=(6,2) (6,2)=(4,2) (4,2)=(2,2)
export function f15GCD(a: number, b: number): number {
  while (a != b) {
    let tempB = b;
    b = Math.min(a, b);
    a = Math.max(a, tempB) - b;
  }
  return b;
}

export function f16GCD(a: number, b: number): number {
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}
export function f17GCD(a: number, b: number): number {
  if (b == 0) {
    return a;
  } else {
    return f17GCD(b, a % b);
  }
}
//Time complexity :O(log(min(a,b)))
