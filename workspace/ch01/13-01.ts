// 인덱스 시그니처 - 문자열

(() => {
  interface User {
    name: string;
    email: string;
    // address?: string;
    // phone?: string;
    // hobby?: string;
    [params: string]: string | number;

    // age: number; => 불가능
    age: number;
  }

  const ryan: User = {
    name: "라이언",
    email: "ryan@kakao.com",
    address: "경기도 성남시 분당구 정자동",
    phone: "01012341234",
    hobby: "축구",
    age: 25,
  };

  const chunsik: User = {
    name: "춘식이",
    email: "chunsik@kakao.com",
    address: "제주특별자치도 제주시 노형동",
    age: 28,
  };

  console.log(ryan, chunsik);
})();
