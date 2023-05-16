const pokemonList = ["피카츄", "라이츄", "파이리", "꼬부기"];
pokemonList.splice(0, 2, "야도란", "또가스");
function exampleOne(array: Array<string>, change1: string, change2: string) {
  const result = array.splice(0, 2, change1, change2);
  return result.join("");
}

console.log(exampleOne(pokemonList, "야도란", "또가스"));

// 제한적이지만 위와 같은 방식으로
// 데이터를 '교체'하는 함수를 만들어낼 수 있다.
// 문자열 메서드인 .replace() 메서드를 사용하는 것과 비슷하지만 구분됩니다.

// 위의 example() 함수를
// 타입스크립트의 타입 명시(type anootation)를 사용하여 안정성을 확보해보자.
// 배열의 경우 타입 명시를 위해 Array<string>를 사용하거나
// string[]을 사용할 수 있다.
