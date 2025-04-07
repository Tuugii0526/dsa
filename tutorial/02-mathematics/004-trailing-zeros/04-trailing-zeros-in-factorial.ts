import { f8Factorial } from "../003-factorial/factorial";

export function f9TrailingZeros(n: number) {
  let result = f8Factorial(n);
  let zeroCount = 0;
  while (result % 10 == 0) {
    result /= 10;
    zeroCount++;
  }
  return zeroCount;
}
// Бидний зорилго бол аливаа тооны факториал хэдэн тэгээр төгсөхийг олох .
// Бид тухайн тоог анхын тоон задаргаанд 2 болон 5 хэдэн ширхэг буйг харан олж болно . Гэхдээ энэ арга нь илүү төвөгтэй болгож магад .
export function f10TrailingZeros(n: number): number {
  const countObject = {
    "2": 0,
    "5": 0,
  };
  for (let i = 0; i <= n; i++) {
    let result = f10howManyTwoAndFive(i);
    countObject["2"] += result["2"];
    countObject["5"] += result["5"];
  }
  return Math.min(countObject["2"], countObject["5"]);
}
//Time complexity of f10TrailingZeros,as said by ChatGPT , is nlogn.
export function f10howManyTwoAndFive(n: number): { [key: string]: number } {
  try {
    let twoCount = 0;
    let fiveCount = 0;
    if (n <= 1) {
      return {
        "2": twoCount,
        "5": fiveCount,
      };
    }

    while (n > 1 && (n % 2 == 0 || n % 5 == 0)) {
      if (n % 2 == 0) {
        n /= 2;
        twoCount++;
      } else {
        n /= 5;
        fiveCount++;
      }
    }
    const response = {
      "2": twoCount,
      "5": fiveCount,
    };
    return response;
  } catch (error) {
    console.error("Erro occured");
    throw new Error(JSON.stringify(error));
  }
}
export function f11ConditionCheck(n: number) {
  if (n > 1 && (n % 2 == 0 || n % 5 == 0)) {
    return "\u{1F7E2} valid";
  }
  return "\u{1F534} not valid";
}
export function f12FormulaBasedComputing(n: number) {
  let zeroCount = 0;
  for (let i = 5; i <= n; i *= 5) {
    zeroCount += Math.floor(n / i);
  }
  return zeroCount;
}
//Time complexity : n>=5^k
//theta(logn)
