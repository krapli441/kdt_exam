let basicData = {
  count: 10,
  min: 1,
  max: 10,
  divideNumber: 5,
};

function exampleOne(count, min, max) {
  let exampleArr = [];
  for (let i = min; min <= count; min++) {
    let calc = Math.floor(Math.random() * 1000) / 100;
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

function exampleFour(object) {
  let value = true;
  if (Array.isArray(object)) {
    for (let i = 0; i < object.length; i++) {
      if (typeof object[i] !== "number") {
        console.log("배열에 숫자가 아닌 값이 있습니다.");
        value = false;
        break;
      }
    }
  } else {
    console.log("매개변수에 배열이 입력되지 않았습니다.");
    value = false;
  }
  return value;
}

console.log(exampleFour([1, 2, 3]));
console.log(exampleFour([1, 2, "삼"]));

function exampleFive(objectOne, objectTwo) {
  // objectOne 매개변수는 최상단 basicData 객체가 인자로 들어올 것을 가정합니다.
  // objectTwo는 exampleTwo 함수의 리턴값이 인자로 들어올 것을 가정합니다.
  let value;
  // objectOne, objectTwo 모두 각각 프로퍼티의 값을 더한 뒤,
  // 위의 지역번수 value에 총합을 생성하여 리턴하는 로직을 작성하세요.
  return value;
}

console.log(exampleFive(basicData, exampleTwo(exampleOne(10, 1, 10))));
