function exampleOne(first, second, dataType) {
  if (typeof first !== dataType && typeof second !== dataType) {
    return new Error(
      `매개변수 first, second는 모두 ${dataType} 타입이어야 합니다.`
    );
  }
}

function arrayLengthEven(array) {
  if (array.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isExampleTwo(first, second) {
  //Guide : exampleOne() 함수를 호출하여 타입 검사를 따로 합니다.
  //Guide : 타입 검사가 실패하면 에러를 발생시켜 함수가 실행되지 않도록 조치합니다.
  exampleOne(first, second, "");

  let booleanResult;

  if (first < second) {
    booleanResult = true;
  } else {
    booleanResult = false;
  }

  if (typeof booleanResult === "boolean") {
    return booleanResult;
  } else {
    return new Error("조건식이 boolean이 아니어서 리턴 하지 못했습니다.");
  }
}

console.log(isExampleTwo(10, 20));

let basicData = [4, 6, 23, 5, 94, 35, 44, 66];

function exampleThree(array, functionOne, functionTwo) {
  // 매개변수 인자로 들어오는 함수 두 개는 데이터 타입이 모두 함수여야 함.
  exampleOne(functionTwo, functionOne, "function");
  // 매개변수 array의 모든 원소는 숫자 정수여야 함.
  // 매개변수 array의 배결 길이(length)는 짝수여아 함. 홀수라면 10을 추가하여 짝수를 만듬.

  let arrayResult = [
    [null, null],
    [null, null],
    [null, null],
    [null, null],
  ];
  // 매개변수 array는 배열의 순서 한 쌍씩 값의 크기를 비교하여
  // 비교적 작은 값은 arrayResult의 원소 배열의 0번째,
  //큰 값은 arrayResult의 원소 배열의 1번째에 넣어준다.

  return arrayResult;
}
console.log(typeof exampleOne);
// console.log(exampleThree(basicData, exampleOne, isExampleTwo));
// Q 위의 콘솔을 활용하여
// 함수 exampleThree()의 리턴값을 통해 재조립된 배열을 만드시오.

//* 2023.04.21 과정

//! isExampleTwo()를 호출하려면 매개면수가 2개 필요한데 함수 안의 exampleOne()를 호출할 매개변수는 3개여서.. 이 부분에 혼란이 좀 있었습니다.
//! 예준님께 설명을 들었는데 exampleOne의 세번째 매개변수를 "function"으로 하면 구분할 수 있다고 하셨는데, typeof에 function도 포함된 줄 몰랐습니다.
