// 선택적 파라미터(optional parameter)

(() => {
  function user(name: string, age?: number): void {
    console.log(name, age);
  }

  user("우욱", 26);
  user("우우욱");
})();
