function diffFinder(targetArray, compareArray, originalArray) {
    var duplicatedElement = null;
    var replaceElement = null;
    targetArray.forEach(function (element, index) {
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
var pokemon = ["피카츄", "라이츄", "파이리", "꼬부기"];
var digimon = ["코로몬", "테일몬", "가브몬", "꼬부기"];
var digimonOriginalData = ["코로몬", "테일몬", "가브몬", "어니몬"];
console.log(diffFinder(digimon, pokemon, digimonOriginalData));
