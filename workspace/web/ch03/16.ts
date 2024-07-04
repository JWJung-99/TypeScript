// 타입 가드 함수 작성

(() => {
  interface User {
    name: string;
    age: number;
    admin: false;
  }

  interface AdminUser {
    name: string;
    admin: true;
    level: 1 | 2 | 3;
  }

  interface GuestUser {
    name: "게스트";
    age: 0;
  }

  const user1: User = {
    name: "무지",
    age: 30,
    admin: false,
  };

  const user2: AdminUser = {
    name: "라이언",
    admin: true,
    level: 2,
  };

  const user3: GuestUser = {
    name: "게스트",
    age: 0,
  };

  function helloUser(user: User | AdminUser | GuestUser) {
    if (isAdmin(user)) {
      console.log(`안녕하세요, ${user.level} ${user.name} 관리자님!`);
    } else {
      console.log(`안녕하세요 ${user.name} 회원님!`);
    }
  }

  function isAdmin(user: User | GuestUser | AdminUser) {
    // return true;
    return "admin" in user && user.admin;
  }

  helloUser(user1);
  helloUser(user2);
  helloUser(user3);
})();
