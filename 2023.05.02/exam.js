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
    this.Calculate(cal, a, b);
  }

  Calculate(value) {
    let result = "";
    if (value === "add") {
      console.log("더하기 감지");
      result = this.a + this.b;
      console.log(result);
    }
    if (value === "minus") {
      console.log("빼기 감지");
      result = this.a - this.b;
      console.log(result);
    }
    if (value === "divide") {
      console.log("나누기 감지");
      result = this.a / this.b;
      console.log(result);
    }
    if (value === "multiply") {
      console.log("곱하기 감지");
      result = this.a * this.b;
      console.log(result);
    } else {
      console.log(
        "add(더하기), minus(빼기), divide(나누기), multuply(곱하기) 네가지 중 하나를 입력하셔야 합니다."
      );
    }
  }
}

console.log(new Calculator("add", 10, 20));

//*2020.05.02 문제풀이

// 1. 일단 문제 작성.
// 2. class 형식으로 우선 사칙연산을 만들어봤다.
// 3. a에 10, b에 20이라는 수가 선언돼있으니 이걸 바꿔보면 어떨까? NaN 오류가 뜬다.
// 4. 분명 숫자가 입력됐는데 NaN이라고 왜 뜨는 걸까?
// 5. a와 b에 set을 추가했는데도 NaN이 뜬다.
// 6. 이유를 찾아보니 set cal(value) 메소드가 cal 속성을 설정할 때마다
// 사칙연산도 수행하도록 되어 있기 때문이라고 한다.
// 7. 그렇다면 계산하는 함수를 따로 만들어야 할까?
// 8. 계산하는 함수를 추가로 만들고 실행해봤다. 일단 계산은 된다.
// 그런데 else문이 출력된다.
