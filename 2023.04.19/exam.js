let basicData = {
  header: {},
  main: {},
  footer: {},
};

// fromJsonData 변수는
// json.parse()를 통해 받아온 데이터라고 가정한다.

let fromJsonData = {
  header: {
    content: "header 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#ccc",
    },
  },
  main: {
    content: "main 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#333",
    },
  },
  footer: {
    content: "footer 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#666",
    },
  },
};

function exampleOne(basicData, fromJsonData) {
  let value = "";
  value = JSON.stringify(fromJsonData);
  console.log(basicData);
  console.log(value.header);
  console.log(value.main);
  console.log(value.footer);

  // 아래의 호출부를 참고하여, 지역변수 value에
  // 작성한 문자열 데이터로 객체를 가공하는 코드를 작성한다.

  return value;
}

console.log(exampleOne(basicData, fromJsonData));
console.log(basicData);

// // 특정 HTML 요소에 값을 넣는 것을 가정한다.
// const element = "";
// element.innerHTML = exampleOne(basicData, fromJsonData);

// // 위의 fromJsonData와 같은 객체나 JSON을 생성하기 위한
// // 생성자함수, 클래스를 작성한다.
// // setter 기능을 활용하여 인스턴스의 값들은 모두 "문자열"만 들어가도록
// // 안정성을 확보한다.

// class ExampleTwo {
//   constructor() {}
// }

//! 과정
//? 1. 우선 위에서 아래로 한 차례 쭉 읽어봄. -> 무슨 말인지 잘 모르겠음.

//? 2. GPT에게 위 코드에서 주석이 어떤 걸 말하는 거냐고 물어봤음 -> 무언가 대답하는데, 역시 무슨 말인지 잘 모르겠음.

//? 3. 그래서 코드를 다시 여러차례 읽어보고, 나름대로 해석해본 과정 :
//?   3-1. fromJsonData 안의 값을 각각 분류한 뒤 '문자열로 가공'함.
//?   3-2. 이렇게 문자열로 가공된 값을 basicData의 header, main, footer에 넣어줌.
//?   3-3. '문자열로 가공한 뒤 basicData 안에 넣는 기능'은 exampleOne 함수 안에 작성함.
//?   3-4. 이렇게 만들어진 exampleOne 함수를 element.innerHTML 안에 작성함.
//?   3-4. 예상 결과 ->
//?      exampleOne 함수가 실행되면 fromJsonData 안의 값을 분류하여 '문자열로 가공'한 뒤 basicData 안에 넣어줌.
//?      basicData안의 값을 토대로 element.innerHTML 안의 내용 작성. innerHTML에는 basicData 안의 자료들이 들어갈 것이고, html 문서가 완성될 것임.

//? 4. 내가 올바르게 해석한 건지 GPT에게 물어봄. -> 어떤 건 맞고 어떤 건 틀렸다고 함.

//! 5. 뭔가 괘씸함. 우선 내가 생각한 방법대로 해보기로 했음.

//? 6. exampleOne 함수 안에서 fromJsonData 안의 값을 JSON.stringify를 이용해 우선 문자열로 변환하도록 함.

//? 7. 문자열로 가공하긴 했는데, 이걸 어떻게 구분해서 넣지?

//? 8. 대뜸 'basicData.header = value.header;' 라고 작성. undefined가 나옴.
