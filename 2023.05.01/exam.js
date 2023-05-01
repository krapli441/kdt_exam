// example = [[1,2,3], [4,[5,6]], 7, [8,9]]
// def flatten(data):
//     output = []
//     for item in data:
//         if type(item) == list:
//             # 재귀적으로 처리
//             output += flatten(item)
//         else:
//             output.append(item)
//         return output

// print(flatten(example));

//* 23.05.01 문제풀이
// 1. 우선 그대로 작성
// 2. 파이썬 설치해서 실행해봄. 결과값 [1]이 나왔다.
// 3. 자바스크립트에서 쓰던 문법대로 작성해보기로 함.
// 4. 이것저것 넣어보니 결과값 [0]이 나왔다.
//4.1. return 스코프를 바꿔보니 이번엔 다른 값들이 나옴.
// 5. 애초에 '재귀적'이라는게 무슨 뜻일까?
// 6. 어떠한 것을 정의할 때 자기 자신을 참조하는 것을 뜻한다.
// 7. 파이썬으로 작성했을 때 for item, list가 어떤 것을 말하는 것인지 잘 모르겠다.
// 8. gpt에게 물어보니 자바스크립트의 배열과 '유사'한 요소라고 함. 그럼 엄밀히 따지면 배열은 아니라는 것 같다.
// 9. 파이썬은 item이 list인지 확인하라는 뉘앙스니까 자바스크립트는 매개변수가 배열인지 확인하면 될까?
// 10. 실행해보니 무한반복이 뜬다.

const example = [[1, 2, 3], [4, [5, 6]], 7, [8, 9]];

function flatten(data) {
  let output = [];
  for (const array in data) {
    if (Array.isArray(data)) {
      console.log("data is array");
      output += flatten(data);
    } else {
      output.push(array);
    }
    return output;
  }
}

console.log(flatten(example));
