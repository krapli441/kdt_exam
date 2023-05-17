interface diffResult {
  duplicatedElement: string | null;
  replaceElement: string | null;
  // 유니온 타입 연산자를 써서 문자열과 null 값이 들어간다고 지정함.
}

function diffFinder(
  targetArray: string[],
  compareArray: string[],
  originalArray: string[]
): diffResult {
  let duplicatedElement: string | null = null;
  let replaceElement: string | null = null;

  targetArray.forEach((element, index) => {
    if (compareArray.includes(element) === true) {
      duplicatedElement = element; // 중복되어 있는 요소를 미리 만들어둔 변수에 할당
      replaceElement = originalArray[index]; // 중복되었다고 판단되는 시점의 index를 통해 교체하기 위해 별도의 변수에 할당
      targetArray[index] = replaceElement; // 요소 교체
    }
  });
  return {
    duplicatedElement: duplicatedElement,
    replaceElement: replaceElement,
  };
}

let pokemon: string[] = ["피카츄", "라이츄", "파이리", "꼬부기"];
let digimon: string[] = ["코로몬", "테일몬", "가브몬", "꼬부기"];
let digimonOriginalData: string[] = ["코로몬", "테일몬", "가브몬", "어니몬"];

console.log(diffFinder(digimon, pokemon, digimonOriginalData));
