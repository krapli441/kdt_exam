// 1. npm install inquirer
// 2. esm 방식으로만 동작하는 외부 CLI 라이브러리

import inquirer from "inquirer";

// ? inquirer 라이브러리의 .prompt() 메서드는 프로미스를 반환하도록 작성돼있다.
// ? then() 메서드로 입력 받은 데이터를 전달할 수 있다.

const questions = [
  { type: "input", name: "name", message: "당신의 이름은 무엇인가요?" },
  {
    type: "list",
    name: "milk",
    message: "당신이 좋아하는 우유는 무엇인가요?",
    choices: ["바나나우유", "딸기우유", "초코우유", "우유"],
  },
  {
    type: "list",
    name: "ramen",
    message: "당신이 좋아하는 라면은 무엇인가요?",
    choices: [
      "진라면",
      "신라면",
      "안성탕면",
      "삼양라면",
      "너구리",
      "틈새라면",
      "열라면",
    ],
  },
  {
    type: "list",
    name: "bloodtype",
    message: "당신의 혈액형은 무엇입니까?",
    choices: ["A형", "B형", "AB형", "O형"],
  },
  { type: "input", name: "age", message: "당신의 나이는 몇 살입니까?" },

  { type: "confirm", name: "confirm", message: "확실합니까?" },
];

function exampleOne(array) {
  const trick = array.pop();
  let shuffledArray = [array.sort(() => Math.random() - 0.5)];
  shuffledArray.push(trick);
  // Q.1 랜덤으로 배열의 인덱스를 섞어내는 함수 로직을 작성하세요.
  // 단, 마지막 confirm은 항상 마지막 인덱스어야 합니다.
  return shuffledArray;
}
console.log(exampleOne(questions));

inquirer.prompt(questions).then((answers) => {
  console.log("결과 :", answers);
});

//* 시도 과정

// 1. 우선 그대로 따라작성 후 실행. cli 화면을 만드는 모듈인 것은 알겠다.
// 2. 배열의 값을 섞어내는 것은 성공. Math.random()을 이용하니 어렵지 않았다. 배열은 0.5를 입력하면 랜덤이 된다는 것은 알겠음.
// 3. inquirer에서 데이터를 입력할 때마다 exampleOne을 실행해 카드 섞듯이 섞으라는 것인지 이해하기 어려움.
// 4. exampleOne에서 랜덤으로 섞은 값을 토대로 .prompt의 질문이 무작위로 나오게 하라는 것일까?
// 5. 질문이 여러개 담겨있는 배열 형식의 객체를 만들었다.
// 6. .prompt 안에 질문이 담겨있는 객체를 넣어보니 잘 실행된다. 이제 마지막 질문에 "확실합니까?" 가 나오게 하면 된다.
// 7. 배열의 마지막 인덱스를 제거하고 반환하는 pop을 사용한 뒤 그 값을 다시 배열에 집어넣고 실행하였음
// 8. console.log에서는 잘 추가되는 것 같은데, .prompt에선 마지막 질문이 뜨지 않는다.
