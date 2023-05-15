function exampleOne(a) {
  if (typeof a === "number") {
    if (a - Math.floor(a) !== 0) {
      throw new Error("정수를 입력해야 합니다");
    } else {
      console.log(`입력한 값은 ${a}입니다.`);
    }
  } else {
    throw new Error("정수를 입력해야 합니다.");
  }
  return a;
}

exampleOne(34);
