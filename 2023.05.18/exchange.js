var dummyText = "아버지가방에들어가신다.";
// * 임의의 텍스트가 정돈되지 않은 상태로 주어졌다.
// * 한글의 특성상, 단어의 띄어쓰기를 통해 뜻을 바로 정립해야 한다.
// * 아버지가 방에 들어가신다. "아버지"라는 단어와 "방"이라는 단어는 명사다.
var refineNounData = ["아버지", "방"];
//* 4. ~가 라는 문법, 이,가 라는 뜻은 '보격 조사'라는 어려운 문법이다.
//* 4. "이"나, "가"를 기준으로 앞에 있는 문자열은 매우 높은 확률로 명사다.
//* 5. ~에 라는 문법, 이, 에 라는 뜻은 '부사격 조사' 라는 어려운 문법이다.
//* 5. "에"를 기준으로 앞에 있는 문자열은 매우 높은 확률로 명사다.
var spacing = " ";
// * 6. 띄어쓰기를 통해 단어를 구분한다.
/**
 * spacingLetter()라는 함수를 제작하여
 * "아버지"께서 "방"에 들어가신 문장으로 띄어쓰기를 삽입하는 기능을 제작해보자.
 *  */
function spacingLetter(text, nounData, spacing) {
  var rename = "";
  for (var i = 0; i < nounData.length; i++) {
    if (text.includes(nounData[i])) {
      console.log("".concat(nounData[i]));
      rename += nounData[i];
      if (i !== nounData.length - 1) {
        rename += spacing; // 마지막 띄어쓰기 하나는 생략하기.
      }
    }
  }
  console.log(rename);
  var result = text;
  for (var i = 0; i < nounData.length; i++) {
    result = result.replace(nounData[i], nounData[i] + spacing);
  }
  return result;
}
console.log(spacingLetter(dummyText, refineNounData, spacing));
// * 위 함수가 제대로 작동하려면 매우 복잡해지지만, 간단한 형태로 작성해보자.
// * 적정 수준에서 함수가 완료되었다면, 타입스크립트 방식으로 변환해보자.
