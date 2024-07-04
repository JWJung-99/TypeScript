// 함수의 타입 추론

(() => {
  function add10(num: number) {
    return num + 10;
  }

  function add20(num = 10) {
    return num + 20;
  }

  function checkNumber(x: number, y: number) {
    if (x === 10) {
      return "x는 10";
    } else if (x > y) {
      return 5;
    }
  }

  const result1 = add10(100.12345);
  const result2 = add20(100.12345);

  const returnValue = checkNumber(10, 20);
  console.log(returnValue);

  console.log(result1, result2);
})();
