let promise = new Promise(function (resolve, reject) {
  resolve("resolve 테스트");
});

promise.then(function (result) {
  console.log(result);
});
