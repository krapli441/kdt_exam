const pokemonList = ["피카츄", "라이츄", "파이리", "꼬부기"];

// 자바스크립트가 지원하는 강력한 배열 메서드는
// "어디서부터 어디까지" 교체한다는 의미의 splice 메서드가 있다.
// 예를 들어 위의 배열 0번 부터 1번까지의 전기 포켓몬을 교체하고 싶다면
// 아래와 같이 splice 메서드를 사용할 수 있다.
pokemonList.splice(0, 2, "야도란", "또가스");

console.log(pokemonList);
// splice(포함, 미만, 교체할 값1, 교체할 값2) 방식으로
// 기존에 소개했던 메서드와 비슷한 듯 다르다.
// 현 위치 라인에서 pokemonList를 디버깅 하면
// ["야도란", "또가스", "파이리", "꼬부기"]라는 결과를 얻을 수 있다.
// 이것을 .join("") 메서드를 사용하여 문자열로 변환하면
// "야도란또가스파이리꼬부기" 라는 결과를 얻을 수 있다.

// 문자열이 '필요한 만큼' 교체되고, 합쳐진다면, 자유롭게 변형할 수 있는 강력한 로직을 만들어낼 수 있다.
// 이러한 비교로 react에서는 state를 사용하여
// 필요한 만큼의 데이터를 교체하고, 합쳐서 화면에 보여주는 로직을 만들어 낼 수 있다.

// function exampleOne(array, change1, change2) {
//   const result = array.splice(0, 2, change1, change2);
//   return result.join("");
// }

// const result = exampleOne(pokemonList, "야도란", "또가스");
// console.log(result); // 야도란또가스파이리꼬부기

// 제한적이지만 위와 같은 방식으로 데이터를 '교체'하는 함수를 만들어낼 수 있습니다.
// 문자열 메서드인 .replace() 메서드를 사용하는 것과 비슷하지만 구분됩니다.

// 위의 example() 함수를 타입스크립트의 타입 명시(type anootation)를 사용하여 안정성을 확보해보자.
// 배열의 경우 타입 명시를 위해 Array<string>를 사용하거나, string[]을 사용할 수 있다.
