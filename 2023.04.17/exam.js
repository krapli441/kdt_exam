function examOne(first, second) {
  if (typeof first === "string") {
    console.log("문자열 데이터를 입력하셨습니다.");
  } else if (typeof second === "string") {
    console.log("문자열 데이터를 입력하셨습니다.");
  } else {
    return first + second;
  }
  // 매개변수가 문자열일 경우, 다음과 같은 문자열이 나타나도록 작성하시오.
  // "문자열 데이터를 입력하셨습니다."
}

function examTwo(first, second, third) {
  if (typeof first !== "number") {
    console.log("숫자를 입력해주세요.");
  } else if (typeof second !== "number") {
    console.log("숫자를 입력해주세요.");
  } else if (typeof third !== "number") {
    console.log("숫자를 입력해주세요.");
  } else {
    return first * second * third;
  }
  // 숫자여야만 실행되도록 타입을 확인하는 로직을 작성하시오.
}

function examThree(str) {
  if (typeof str === "string") {
    let count = 0;
    while (str[count] !== undefined) {
      count++;
    }
    return count;
  } else {
    console.log("문자열을 입력해주세요.");
  }
  // 문자열만 실행되도록 타입을 확인하는 로직을 구하시오.
  // length 프로퍼티를 사용하지 않고 길이값을 구하시오.
}

function examFour(array) {
  if (Array.isArray(array)) {
    let calc = Math.min(...array);
    return calc;
  }
  // 배열(array)만을 인자로 받아서 실행할 수 있도록 작성하시오.
}

function examFive(array) {
  if (Array.isArray(array)) {
    for (i = 0; i < array.length; i++) {
      arr;
    }
    return array[0] + array[1] + array[2];
  }
  // 배열(array)만을 인자로 받아서 실행할 수 있도록 작성하시오.
}

// function examFive(array) {
//   if (Array.isArray(array)) {
//     let count = 0;
//     array.forEach((item) => (count += item));
//     return count;
//   }
//   // 배열(array)만을 인자로 받아서 실행할 수 있도록 작성하시오.
// }

console.log(examOne(2, 3)); // Question 1 덧셈 로직 만들기
console.log(examTwo(2, 3, 4)); //  Question 2 곱셈 로직 만들기
console.log(examThree("hello")); // Question 3 문자열 길이 구하기
console.log(examFour([3, 1, 4, 2])); // Question 4 최솟값 판별하기
console.log(examFive([1, 2, 3])); // Question 5 배열값 누산(총합)하기
