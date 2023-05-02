// const add = require ('./utility-module-add.js')
// const minus = require ('./utility-module-minus.js')
// const minus = require ('./utility-module-divide.js')
// const minus = require ('./utility-module-multiply.js')

// const a = 10;
// const b = 20;

// console.log(add(a, b));
// console.log(minus(a, b));
// console.log(divde(a, b));
// console.log(multiply(a, b));

// q. 사칙연산 모듈을 4개 만들어서 import(가져오기) 후 호출한 예시다.
// q. 아무래도 이렇게 하나하나 가져오는 것은 가독성이나 사용성 면에서 좋지 않아보인다.
// q. 이것을 하나의 Class 형태의 모듈로 만들어 관리할 수 있을까?

// q2. Class에서 작성될 메서드는 모두 '정수'로 된 두 개의 인자를 받아서 결과를 반환하게끔 제한하려면
// q2. 어떤 helper function을 사용해야 할까?
// q2. helper function을 사용하면 어떤 장점이 있을까?
// q2. helper function을 사용하지 않고 구현할 방법이 있을까?

class Calculator {
  constructor(cal, a, b) {
    this.cal = cal;
    this.a = a;
    this.b = b;
  }

  set cal(value) {
    if (value === "add") {
      console.log("더하기 감지");
      console.log(this.a + this.b);
    }
    if (value === "minus") {
      console.log("빼기 감지");
      console.log(this.a - this.b);
    }
    if (value === "divide") {
      console.log("나누기 감지");
      console.log(this.a / this.b);
    }
    if (value === "multiply") {
      console.log("곱하기 감지");
      console.log(this.a * this.b);
    } else {
      console.log(
        "add(더하기), minus(빼기), divide(나누기), multuply(곱하기) 네가지 중 하나를 입력하셔야 합니다."
      );
    }
  }
}

const add = new Calculator("add", 10, 20);
console.log(add);

//*2020.05.02 문제풀이

// 1. 일단 문제 작성.
// 2. class 형식으로 우선 사칙연산을 만들어봤다.
// 3. a에 10, b에 20이라는 수가 선언돼있으니 이걸 바꿔보면 어떨까? NaN 오류가 뜬다.
// 4. 분명 숫자가 입력됐는데 NaN이라고 왜 뜨는 걸까?
