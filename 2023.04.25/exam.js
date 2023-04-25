//
// exampleOne() 함수는 총 네개의 경우의 수를 분기하여
// 정수기의 필터처럼 데이터 타입과, 원하는 값 검출들을 처리하는 함수이다.
// 필요하지 않은 데이터나, 필요한 데이터, 혹은 안정성을 위한 조치로
// 이러한 함수를 작성해 사용할 수 있다.
// 몇 개의 반복문과 몇 개의 조건문이 작성되어 있는데
// 이것을 다른 방식으로 '처리' 할 수 있을까?

// class의 getter와 setter, helper method로 '객체 지향' 방식으로 조립하거나
// 외부함수, 내부함수 구조 혹은 closure로 '함수 지향' 방식으로 조립하거나
// 할 수 있는 자바스크립트의 '변형성'을 탐구해보자.

function exampleOne(arr, dataType, itemToFind) {
  if (Array.isArray(arr) === false) {
    console.log("배열이 아닙니다.");
    return false;
  }
  const isDataTypeMatched = typeof itemToFind === dataType;
  const isItemExist = arr.includes(itemToFind);

  if (isDataTypeMatched === true && isItemExist === true) {
    console.log(`${itemToFind}은(는) 배열에 존재합니다.`);
    return true;
  } else if (isItemExist === false) {
    console.log(`${itemToFind}은(는) 배열에 존재하지 않습니다.`);
    return false;
  } else if (isDataTypeMatched === false) {
    console.log(`찾으려는 항목은 ${dataType} 데이터 타입이 아닙니다.`);
    return false;
  }
}
const basicData = [
  "안녕하세요",
  "어디선가",
  "입력된",
  "데이터를",
  "찾아보는",
  "함수입니다.",
];

console.log(exampleOne(basicData, "string", "아오"));

//* 2023.04.25 문제풀이

// 1. 일단 적어보고 그대로 실행.
// 2. 기능 자체는 문제없이 잘 작동한다. 이런 걸 내가 만들 수 있을까?

// class ObjectFilter {
//   constructor(arr, dataType, itemToFind) {
//     this.arr = arr;
//     this.dataType = dataType;
//     this.itemToFind = itemToFind;
//   }

//   set arr(value) {
//     if (Array.isArray(value) === true) {
//       this._arr = value;
//     } else {
//       console.log("배열이 아닙니다.");
//     }
//   }

//   set dataType(value) {
//     if ()
//   }
// }

// const filter = new ObjectFilter(basicData);
// console.log(filter);
