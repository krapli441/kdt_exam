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
  // 아래의 호출부를 함고하여, 지역변수 value에
  // 적정한 문자열 데이터로 객체를 가공하는 코드를 작성한다.

  return value;
}

// 특정 HTML 요소에 값을 넣는 것을 가정한다.
const element = "";
element.innerHTML = exampleOne(basicData, fromJsonData);

// 위의 fromJsonData와 같은 객체나 JSON을 생성하기 위한
// 생성자함수, 클래스를 작성한다.
// setter 기능을 활용하여 인스턴스의 값들은 모두 "문자열"만 들어가도록
// 안정성을 확보한다.

class ExampleTwo {
  constructor() {}
}
