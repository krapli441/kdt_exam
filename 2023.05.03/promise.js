let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("완료"), 1000);
});

// resolve 함수는 .then의 첫 번째 함수(인수)를 실행.
promise.then(
  (result) => console.log(result), // 1초 후 "완료!"를 출력
  (error) => console.log(error) // 실행되지 않음
);

let promise = new Promise();
