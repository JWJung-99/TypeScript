// 유니언 타입(union type)

(() => {
  function log(msg: string | number): void {
    console.log(msg);
  }

  log("hello");
  log(200);
})();
