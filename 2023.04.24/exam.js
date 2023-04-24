let basicData = {
  header: {
    id: "header",
    type: "div",
    children: null,
  },
  main: {
    id: "main",
    type: "div",
    children: null,
  },
  footer: {
    id: "footer",
    type: "div",
    children: null,
  },
};

// console.log(Object.keys(basicData).length);
// function tagMaker(tagName, parent, attribute) {
//   const element = document.createElement(tagName);
//   parent.appendChild(element);
//   if (attribute) {
//     Object.assign(element, attribute);
//   }
// }
let elementData = ["게시판", "수업과제", "사용자", "성적", "로그아웃"];

console.log(Object.values(basicData)[0].children);

function exampleOne(object, array) {
  let value;
  // for (let i = 0; i < Object.keys(basicData).length; i++) {
  //   if (Object.values(basicData)[i].children === null) {
  //     value = Object.values(basicData)[i].children = elementData[i];
  //     // return basicData;
  //     console.log(basicData);
  //   }
  // }
  for (let i = 0; i < Object.keys(basicData).length; i++) {
    if (Object.values(basicData)[i].children === null) {
      const id = basicData[Object.keys(basicData)[i]].id;
      value += `<div id= ${id}>${elementData[i]}</div>`;
      // "<div>" + Object.values(basicData[i]) + elementData[i] + "</div>";
      // value += "<div>" + Object.values(basicData[i].children) + "</div>";
      // value += "<div>" + Object.values(basicData[i].children) + "</div>";
    }
  }
  document.body.innerHTML = value;
  return value;
  // basicData 객체의 children 속성이 null 데이터 타입이 할당되어있는지 판별하고
  // null 데이터 타입이 할당되어있으면 매개변수를 각각 할당한다.
  // header, main, footer HTML 태그를 생성하는 로직으로
  // 최종적으로 문자열로 제작된 HTML 태그 데이터를 가공 / 편집하시오.

  // console.log(value);
}
console.log(exampleOne(basicData, elementData));
// console.log(exampleOne(basicData, elementData));

//* 과정
// 1. 우선 basicdata의 children에 값을 넣는 것은 성공. 그런데 elementData를 모두 활용하지 못함.
// 2. div가 세개 생기긴 했는데... 결과 앞에 undefined가 뜸..
