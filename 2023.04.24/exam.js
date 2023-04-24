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

let elementData = ["게시판", "수업과제", "사용자", "성적", "로그아웃"];

function exampleOne(object, array) {
  for (let i = 0; i < Object.keys(basicData).length; i++) {
    if (Object.values(basicData)[i].children === null) {
      Object.values(basicData)[i].children = elementData[i];
      console.log(basicData);
    }
  }
  // basicData 객체의 children 속성이 null 데이터 타입이 할당되어있는지 판별하고
  // null 데이터 타입이 할당되어있으면 매개변수를 각각 할당한다.
  function tagMaker(tagname, parent, attribute) {
    const element = document.createElement(tagname);
    parent.appendChild(element);
    if (attribute) {
      Object.assign(element, attribute);
    }
    return element;
  }
  let value;

  // header, main, footer HTML 태그를 생성하는 로직으로
  // 최종적으로 문자열로 제작된 HTML 태그 데이터를 가공 / 편집하시오.

  return value;
}

console.log(exampleOne(basicData, elementData));
