// const basicData = [
//   { number: 1, name: "코카콜라", price: 1500 },
//   { number: 2, name: "사이다", price: 1200 },
//   { number: 3, name: "포카리스웨트", price: 1000 },
//   { number: 4, name: "칸쵸", price: 800 },
//   { number: 5, name: "오예스", price: 1000 },
//   { number: 6, name: "초코파이", price: 1200 },
//   { number: 7, name: "허니버터칩", price: 1500 },
//   { number: 8, name: "새우깡", price: 900 },
//   { number: 9, name: "치즈볼", price: 1200 },
//   { number: 10, name: "신라면", price: 900 },
// ];

// const currency = {
//   thousand: { value: 1000, name: "일천원권" },
//   fiveThousand: { value: 5000, name: "오천원권" },
//   tenThousand: { value: 10000, name: "일만원권" },
//   fiveHundred: { value: 500, name: "오백원" },
//   hundred: { value: 100, name: "일백원" },
// };

// // console.log(currency.thousand.name);
// // 우리 학원 휴게실에 있는 자판기에 들어있는 음료수의 정보를 담은 배열입니다.
// // 아래의 exampleOne()은 임의의 '돈'에 대해 얼마짜리를 넣었는지 확인할 수 있게 로직을 구성합니다.

// function exampleOne(inputPrice, currency, basicData) {
//   if (inputPrice === 1000) {
//     console.log(`${currency.thousand.name}을 넣으셨습니다.`);
//     let possibleFoodList = [];
//     for (i = 0; i < basicData.length; i++) {
//       if (inputPrice >= basicData[i].price) {
//         possibleFoodList.push(basicData[i].name);
//       }
//     }
//     if (possibleFoodList.length > 0) {
//       console.log(
//         `${currency.thousand.name}으로 구매할 수 있는 제품들은 ${possibleFoodList}입니다.`
//       );
//     }
//   }

//   if (inputPrice === 5000) {
//     console.log(`${currency.fiveThousand.name}을 넣으셨습니다.`);
//     let possibleFoodList = [];
//     for (i = 0; i < basicData.length; i++) {
//       if (inputPrice >= basicData[i].price) {
//         possibleFoodList.push(basicData[i].name);
//       }
//     }
//     if (possibleFoodList.length > 0) {
//       console.log(
//         `${currency.thousand.name}으로 구매할 수 있는 제품들은 ${possibleFoodList}입니다.`
//       );
//       console.log("당신은 부자시군요. 531302-04-062449 국민 박준형");
//     }
//   }

//   if (inputPrice === 10000) {
//     console.log(`${currency.tenThousand.name}을 넣으셨습니다.`);
//     let possibleFoodList = [];
//     for (i = 0; i < basicData.length; i++) {
//       if (inputPrice >= basicData[i].price) {
//         possibleFoodList.push(basicData[i].name);
//       }
//     }
//     if (possibleFoodList.length > 0) {
//       console.log(
//         `${currency.thousand.name}으로 구매할 수 있는 제품들은 ${possibleFoodList}입니다.`
//       );
//       console.log("당신은 부자시군요. 531302-04-062449 국민 박준형");
//     }
//   }

//   if (inputPrice === 500) {
//     console.log(`${currency.fiveHundred.name}을 넣으셨습니다.`);
//     let possibleFoodList = [];
//     for (i = 0; i < basicData.length; i++) {
//       if (inputPrice >= basicData[i].price) {
//         possibleFoodList.push(basicData[i].name);
//       }
//     }
//     if (possibleFoodList.length > 0) {
//       console.log(
//         `${currency.thousand.name}으로 구매할 수 있는 제품들은 ${possibleFoodList}입니다.`
//       );
//     } else {
//       console.log(
//         `${currency.fiveHundred.name}으로 살 수 있는 제품은 없습니다.`
//       );
//     }
//   }
//   if (inputPrice === 100) {
//     console.log(`${currency.hundred.name}을 넣으셨습니다.`);
//     let possibleFoodList = [];
//     for (i = 0; i < basicData.length; i++) {
//       if (inputPrice >= basicData[i].price) {
//         possibleFoodList.push(basicData[i].name);
//       }
//     }
//     if (possibleFoodList.length > 0) {
//       console.log(
//         `${currency.thousand.name}으로 구매할 수 있는 제품들은 ${possibleFoodList}입니다.`
//       );
//     } else {
//       console.log(`${currency.hundred.name}으로 살 수 있는 제품은 없습니다.`);
//     }
//   }
// }

// console.log(exampleOne(1000, currency, basicData));

// // * 2023.04.22 문제 풀이

// //* 우선 exampleOne에 천원권을 입력하고 호출.
// //* 'currency.thousand.name' 을 통해 구매할 수 있는 제품들은 'basicData[i].name' 나오도록 함수 변경.
// //* console.log는 잘 나오나, 'price'를 읽을 수 없다는 오류 뜸.
// //? 반복문의 비교 연산자 문제였음. 해결.
// //* 구매할 수 있는 물건들을 한 줄씩 출력하는게 맘에 들지 않았음.
// //* 빈 배열을 담은 뒤 결과값을 push를 통해 담아내도록 함.

// 원본 주석

const basicData = [
  { number: 1, name: "코카콜라", price: 1500 },
  { number: 2, name: "사이다", price: 1200 },
  { number: 3, name: "포카리스웨트", price: 1000 },
  { number: 4, name: "칸쵸", price: 800 },
  { number: 5, name: "오예스", price: 1000 },
  { number: 6, name: "초코파이", price: 1200 },
  { number: 7, name: "허니버터칩", price: 1500 },
  { number: 8, name: "새우깡", price: 900 },
  { number: 9, name: "치즈볼", price: 1200 },
  { number: 10, name: "신라면", price: 900 },
];

const currency = {
  thousand: { value: 1000, name: "일천원권" },
  fiveThousand: { value: 5000, name: "오천원권" },
  tenThousand: { value: 10000, name: "일만원권" },
  fiveHundred: { value: 500, name: "오백원" },
  hundred: { value: 100, name: "일백원" },
};

// 우리 학원 휴게실에 있는 자판기에 들어있는 음료수의 정보를 담은 배열입니다.
// 아래의 exampleOne()은 임의의 '돈'에 대해 얼마짜리를 넣었는지 확인할 수 있게 로직을 구성합니다.

function exampleOne(inputPrice, currency, basicData) {
  if (inputPrice === currency.thousand.value) {
    console.log(`${currency.thousand.name}을 넣으셨습니다.`);
  }

  console.log(exampleOne(1000, currency, basicData));

  // Q.1
  // 만약 inputPrice가 1000원이라면 currency.thousand.name을 반환하여
  // "일천원권을 넣었습니다". 라는 문구를 console.log를 통해 출력하도록 제작하세요.
  // Q.2
  // 만약 inputPrice가 1000원일 때, basicData를 통해 구매 가능한 제품을
  // console.log()를 통해 출력하세요.
  // Q.3
  // 만약 inputData가 모든 제품의 가격보다 적다면 "잔액이 부족합니다." 라는 문구를
  // console.log()를 통해 출력하세요.
  // Q.4
  // 만약 inputData가 모든 제품의 가격보다 많다면 "당신은 부자입니다."라는 문구를
  // console.log()를 통해 출력하세요.
}
