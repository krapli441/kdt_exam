// buisness logic
// % 나머지 값을 내는 연산자 "%"
// 7 % 2 = 1
// 숫자 7을 2로 나눈 나머지 값은 1이다
// 8 % 2 = 0
// 숫자 8을 2로 나눈 나머지 값은 0이다

import inquirer from "inquirer";

// 홀수 odd number, 짝수 even number를 구분하는 근거로
// 2로 나눈 값의 '목'을 제외한 나머지가 0이면 짝수, 0이 아니면 홀수라는 결론이 나온다.

// work : 오라클 빌딩에는 두 개의 엘레베이터가 있다.

function oddElevator(floorNumber) {
  if (floorNumber <= 10 && floorNumber % 2 == 1) {
    let inputData = floorNumber;
    console.log(`${inputData}층을 입력하였습니다.`);
    return true;
  } else {
    console.log(`${floorNumber}층은 짝수 엘레베이터만 갈 수 있습니다.`);
    return false;
  }
}

function evenElevator(floorNumber) {
  if (floorNumber <= 10 && floorNumber % 2 == 0) {
    let inputData = floorNumber;
    console.log(`${inputData}층을 입력하였습니다.`);
    return true;
  } else {
    console.log(`${floorNumber}층은 홀수 엘레베이터만 갈 수 있습니다.`);
    return false;
  }
}

console.log(oddElevator(5));
console.log(evenElevator(10));

inquirer
  .prompt([
    {
      type: "list",
      name: "엘레베이터",
      message: "어떤 엘레베이터를 타시겠습니까?",
      choices: ["짝수층 엘레베이터", "홀수층 엘레베이터"],
    },
    {
      type: "list",
      name: "층수",
      message: "몇 층으로 가시겠습니까?",
      choices: [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  ])
  .then((answers) => {
    console.log("정답:", answers);
  });

// 홀수 전용, 짝수 전용 엘레베이터 두 개가 마련되어있지만, 예외가 발생한다.
// 짝수 엘레베이터는 1층도 가능하게 설계되어있다.
// 홀수 엘레베이터는 10층도 가능하게 설계되어있다.
// 짝수, 홀수 엘레베이터 둘 다 지하 1층 -1 까지 가능하게 설계되어있다.

// ESM 모듈 방식으로 사용 가능한
// npm install inquirer 모듈을 설치하여
// 지하 1층부터 10층까지의 숫자를 입력할 수 있는 인터페이스를 제작한다.
// "문을 열겠습니다" 라는 문구가 나오게 한다.
// 1초 뒤에 "n층에 도착하였습니다" 라는 문구가 나오게 한다.
// "문을 닫습니다." 라는 문구가 나오게 한다.

// 위의 설명을 종합하여
// orderlist로(순서가 있는 목록)으로
// 예상되는 절차를 나열해보자.

//* 23.04.27 과정

// 1. 우선 홀수, 짝수 엘레베이터 함수가 각각 홀수, 짝수인지 판별하는 기능 추가
// 2. 이것을 inquirer로 이용한다면?
// 3. 홀수 엘레베이터를 탈지, 짝수 엘레베이터를 탈 지는 구현했다.
// 4. 둘 중 하나를 고르면 그 함수를 실행한 뒤 동작하게 하면 되지 않을까?
