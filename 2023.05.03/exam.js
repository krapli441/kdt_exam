// function exampleOne(numberValue) {
//   //sequence .1
//   // 매개변수가 정수인지 확인하는 함수 integerCheck()
//   function integerCheck(data) {
//     if (Number.isInteger(data) === true) {
//       return data;
//     } else {
//       return new Error("이 함수는 정수가 필요합니다.");
//     }
//   }
//   // sequence .2
//   function innerOne(one) {
//     return one + 1;
//   }
//   // sequence .3
//   function innewTwo(two) {
//     return two + 2;
//   }
//   function innerThree(three) {
//     return three + 3;
//   }
//   function innerFour(four) {
//     return four + 4;
//   }
//   // 시퀀스가 1 -> 2 -> 3 -> 4 -> 5 형태로 실행되어야 합니다.
//   // 내부함수 inner 시리즈를 순서대로 실행시켜 리턴된 값을 다음 함수에 인자로 넘겨주는 형태가
//   // 아래에 작성되어있다.
//   // 작동에는 전혀 이상이 없지만 아무래도 도출되는 것은 하나의 목적일 뿐인데
//   // 변수가 낭비되는 것 같다.

//   // 난이도 중급 :해당 코드를 콜백 지옥으로 처리하면 어떻게 작성될까? 결괏값은 20이다.
//   // 난이도 고급 : 해당 코드를 Promise로 처리하면 어떻게 작성될까?
//   // 난이도 고급 : 해당 코드를 async/await로 처리하면 어떻게 작성될까?
//   // 배운 적 없음 : 부모 함수를 클래스로 만들고, 인스턴스에 '동적'으로 4개의 inner 함수를 메서드로 추가할 수 있을까?

//   // 호출 부분

//   integerCheck(numberValue);
//   const first = innerOne(numberValue);
//   const second = innewTwo(first);
//   const third = innerThree(second);
//   const fourth = innerFour(third);
//   return fourth;
// }

// const result = exampleOne(10);
// console.log(result);

//* 2023.05.03 문제풀이

// 1. 문제 작성.
// 2. 난 콜백 지옥을 경험해본 적이 없으니 일단 무작정 트라이해본다.

function exampleOne(numberValue) {
  //sequence .1
  // 매개변수가 정수인지 확인하는 함수 integerCheck()
  function integerCheck(data) {
    if (Number.isInteger(data) === true) {
      return data; // 에러 객체가 없음을 의미하는 null
    } else {
      return new Error("이 함수는 정수가 필요합니다.");
    }
  }
  // sequence .2
  function innerOne(one) {
    return one + 1;
  }
  // sequence .3
  function innewTwo(two) {
    return two + 2;
  }
  function innerThree(three) {
    return three + 3;
  }
  function innerFour(four) {
    return four + 4;
  }
  // 시퀀스가 1 -> 2 -> 3 -> 4 -> 5 형태로 실행되어야 합니다.
  // 내부함수 inner 시리즈를 순서대로 실행시켜 리턴된 값을 다음 함수에 인자로 넘겨주는 형태가
  // 아래에 작성되어있다.
  // 작동에는 전혀 이상이 없지만 아무래도 도출되는 것은 하나의 목적일 뿐인데
  // 변수가 낭비되는 것 같다.

  // 난이도 중급 :해당 코드를 콜백 지옥으로 처리하면 어떻게 작성될까? 결괏값은 20이다.
  // 난이도 고급 : 해당 코드를 Promise로 처리하면 어떻게 작성될까?
  // 난이도 고급 : 해당 코드를 async/await로 처리하면 어떻게 작성될까?
  // 배운 적 없음 : 부모 함수를 클래스로 만들고, 인스턴스에 '동적'으로 4개의 inner 함수를 메서드로 추가할 수 있을까?

  // 호출 부분

  integerCheck(numberValue, (error, data) => {
    if (error) {
      throw error;
    } else {
      innerOne(data, (error, first) => {
        if (error) {
          throw error;
        } else {
          innerTwo(first, (error, second) => {
            if (error) {
              throw error;
            } else {
              innerThree(second, (error, third) => {
                if (error) {
                  throw error;
                } else {
                  innerFour(third, (error, fourth) => {
                    if (error) {
                      throw error;
                    } else {
                      data(null, fourth);
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
  const first = innerOne(numberValue);
  const second = innewTwo(first);
  const third = innerThree(second);
  const fourth = innerFour(third);
  return fourth;
}

const result = exampleOne(10);
console.log(result);
