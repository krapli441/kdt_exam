let basicData = {
  count: 10,
  min: 1,
  max: 10,
  divideNumber: 5,
};

function exampleOne(count, min, max) {
  let exampleArr = [];
  for (let i = min; min <= count; min++) {
    let calc = Math.floor(Math.random() * 10).toFixed(2);
    exampleArr.push(calc);
  }
  return exampleArr;
}

console.log(exampleOne(10, 1, 10));

//

function exampleTwo(array, divideNumber) {
  let exampleObject = {
    a: [],
    b: [],
  };
  if (typeof divideNumber === "number") {
    for (let i = 0; i < array.length; i++) {
      if (array[i] < divideNumber) {
        exampleObject.a.push(array[i]);
      } else {
        exampleObject.b.push(array[i]);
      }
    }
  } else {
    console.log("숫자를 입력해주세요.");
  }
  console.log(exampleObject);
}

exampleTwo(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  5
);

//

function exampleThree(array) {
  if (Array.isArray(array)) {
    let value = 0;
    for (let i = 0; i < array.length; i++) {
      value += array[i];
    }
    return value;
  }
}

console.log(exampleThree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//

// function exampleFour(object) {
//   // 매개변수 object의 프로퍼티가 배열인지를 검사한 후,
//   // 배열의 요소가 모두 숫자 형태인지 검사하는 로직을 작성하세요.
//   let value; // 지역변수에 검사결과를 boolean 타입으로 할당 후 리턴하세요.
//   return value;
// }

// function exampleFive(objectOne, objectTwo) {
//   // objectOne 매개변수는 최상단 basicData 객체가 인자로 들어올 것을 가정합니다.
//   // objectTwo는 exampleTwo 함수의 리턴값이 인자로 들어올 것을 가정합니다.
//   let value;
//   // objectOne, objectTwo 모두 각각 프로퍼티의 값을 거한 뒤,
//   // 위의 지역번수 value에 총합을 생성하여 리턴하는 로직을 작성하세요.
//   return value;
// }

// console.log(
//   exampleFive(basicData, exampleTwo(/*exampleOne 함수의 리턴값 및 구성 */))
// );
