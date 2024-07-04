// Mapped 타입 - 객체 타입을 기반으로 객체 타입 생성(in keyof)

(() => {
  // type UserField = "id" | "name" | "address" | "phone";

  // type User = {
  //   [Prop in UserField]: string;
  // };

  type User = {
    id: string;
    name: string;
    address: string;
    phone: string;
  };

  // User의 key 값만 꺼내는 것 => type UserField = "id" | "name" | "address" | "phone";
  // type UserField = keyof User;

  type OptionalUser = {
    [Prop in keyof User]-?: string;
  };

  const ryan: OptionalUser = {
    id: "1",
    name: "라이언",
    address: "경기도 성남시 분당구",
    phone: "01022223333",
  };

  console.log(ryan);
})();
