// 1. npm install inquirer
// 2. esm 방식으로만 동작하는 외부 CLI 라이브러리

import inquirer from "inquirer";

// ? inquirer 라이브러리의 .prompt() 메서드는 프로미스를 반환하도록 작성돼있다.
// ? then() 메서드로 입력 받은 데이터를 전달할 수 있다.

function exampleOne(array) {
  let shuffledArray = [];
  // Q.1 랜덤으로 배열의 인덱스를 섞어내는 함수 로직을 작성하세요.
  // 단, 마지막 confirm은 항상 마지막 인덱스어야 합니다.
  return shuffledArray;
}

// Q.2 아래에 작성된 .prompt()는 인자로 배열을 요구하므로
// 위의 작성한 exampleOne을 활용하여 입력 데이터를 실행할 때마다 섞어 출력하도록 하세요.
// 공부법으로 유명한 flash card의 주요 코어로직입니다.

inquirer
  .prompt([
    { type: "input", name: "name", message: "당신의 이름은 무엇인가요?" },
    {
      type: "list",
      name: list,
      message: "당신이 좋아하는 우유는 무엇인가요?",
      choices: ["바나나우유", "딸기우유", "초코우유", "우유"],
    },
    { type: "confirm", name: "confirm", message: "확실합니까?" },
  ])
  .then((answers) => {
    console.log("ansers:", answers);
  });
