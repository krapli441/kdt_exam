let basicData = {
  count: 10,
  min: 1,
  max: 10,
  divideNumber: 5,
};

function exampleOne(count, min, max) {
  // 위의 basicData를 참고하여 매개변수를 작성하세요.
  let exampleArr = [];
  for (let i = min; min <= count; min++) {
    let calc = Math.floor(Math.random() * 10).toFixed(2);
    exampleArr.push(calc);
  }
  return exampleArr;
}

console.log(exampleOne(10, 1, 10));

// function exampleTwo(array, divideNumber) {
//   let exampleObject = {
//     a: [],
//     b: [],
//   };
//   // 0번째 매개변수 array는 숫자(실수)로 이루어진 배열입니다.
//   // 1번째 매개변수는 정수만을 입력하도록 타입을 제어하고,
//   // 매개변수 divideNumber보다 작은 수는 a 배열에, 큰 수는 b 배열에 추가하는 로직을 작성하세요.
//   // divideNumber는 basicData 객체의 divideNumber 속성값을 사용합니다.
//   return exampleObject;
// }

// function exampleThree(array) {
//   // 매개변수 array의 모든 매개변수를 더하는 로직을 작성하세요.
//   let value; // 더한 결과 값을 저장하는 변수입니다.
//   return value;
// }

// function exampleFout(object) {
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
