// 인터페이스로 객체의 타입 선언
// 07.ts 복사

(() => {
  interface UserData {
    name: string;
    age: number;
  }

  let u1: UserData = {
    name: "우욱",
    age: 27,
  };

  let u2: UserData = {
    name: "범쌤",
    age: 39,
  };

  console.log(u1);
  console.log(u2);
})();
