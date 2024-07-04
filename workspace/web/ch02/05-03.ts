// echo 함수 - 제네릭 타입 제약
// 05-02.ts 복사

(() => {
  function echo<T extends string | number>(msg: T): T {
    return msg;
  }

  console.log(echo<string>("hello"));
  console.log(echo<number>(200));
  // console.log(echo<boolean>(true));

  const str = echo<string>("World");
  console.log(str.toLowerCase());

  const num = echo<number>(123.456);
  console.log(num.toFixed(2));

  // T는 length를 반드시 포함해야 한다. 따라서 length 속성을 가지고 있는 타입만 들어올 수 있다!
  function echo2<T extends { length: number }>(msg: T): T {
    console.log("msg.length: ", msg.length);
    return msg;
  }

  echo2("hello");
  echo2([100, 200]);
  // echo2(100);
})();
