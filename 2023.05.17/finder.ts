interface diffResult {
  duplicatedElement: string | null;
  replaceElement: string | null;
}

function diffFinder(
  targetArray: string[],
  compareArray: string[],
  originalArray: string[]
): diffResult {
  // 복사할 요소와, 교체할 요소를 별도의 메모리(변수)에 담아놓기 위해 null로 초기화
  // 이렇게 지역 변수로 '이름'을 작성해 무엇을 염두하고 있는지를 유추할 수 있다.
  let duplicatedElement: string | null = null;
  let replaceElement: string | null = null;

  // todo :
  // typescript로 변환할 때
  // 위 두개의 지역변수의 기본형은
  // let duplicatedElement: null = null;
  // null 데이터 타입을 명시하는 것이 맞다.
  // 하지만 아래의 실행에 의해 string으로 변환될 예정이기에 에러가 발생할 것이 확정임.
  // 타입 명시, 타입 표기도 약간의 변용 여지를 남겨주기 위해 여러 타입을 명시하는 것을
  // 합집합 타입, 유니온 타입이라고 한다. (union type)

  targetArray.forEach((element, index) => {
    if (compareArray.includes(element) === true) {
      duplicatedElement = element; // 중복되어 있는 요소를 미리 만들어둔 변수에 할당
      replaceElement = originalArray[index]; // 중복되었다고 판단되는 시점의 index를 통해 교체하기 위해 별도의 변수에 할당
      targetArray[index] = replaceElement; // 요소 교체
    }
  });
  // 리턴 부분에서는 가독성을 위해 객체의 키 값을 지역변수 이름과 동일하게 지정했지만
  // 완전히 다른 키 이름으로 지정해도 무방하다.

  return {
    duplicatedElement: duplicatedElement,
    replaceElement: replaceElement,
  };
}

let pokemon: string[] = ["피카츄", "라이츄", "파이리", "꼬부기"];
let digimon: string[] = ["코로몬", "테일몬", "가브몬", "꼬부기"];
let digimonOriginalData: string[] = ["코로몬", "테일몬", "가브몬", "어니몬"];

console.log(diffFinder(digimon, pokemon, digimonOriginalData));
