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
  return exampleObject;
}

console.log(
  exampleTwo(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    5
  )
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
  let value = 0;
  value +=
    objectOne.count + objectOne.min + objectOne.max + objectOne.divideNumber;
  let array = objectTwo.a.concat(objectTwo.b);
  for (let i = 0; i < array.length; i++) {
    value += Number(array[i]);
  }
  return value;
}

console.log(
  exampleFive(
    basicData,
    exampleTwo(exampleOne(10, 1, 10), basicData.divideNumber)
  )
);
