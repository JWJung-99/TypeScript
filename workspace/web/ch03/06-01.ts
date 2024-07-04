// Mapped 타입 - 유니언 타입을 기반으로 객체 타입 생성(in)

(() => {
  type UserField = "id" | "name" | "address" | "phone";

  type User = {
    [Prop in UserField]: string;
  };

  const ryan: User = {
    id: "1",
    name: "라이언",
    address: "경기도 성남시 분당구",
    phone: "01022223333",
  };

  console.log(ryan);
})();
