// 인터페이스 사용 - 변수, 함수의 매개변수, 리턴타입
// 09.ts 복사

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

  console.log(u1, u2);

  const createUser = (name: string, age: number): UserData => {
    return { name, age };
  };

  const getAge = (user: UserData) => {
    return user.age;
  };

  const u3 = createUser("윤우우욱", 27);
  console.log(u3, getAge(u3));
})();
