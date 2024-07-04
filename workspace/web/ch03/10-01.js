// 타입 단언이 필요한 JS 코드

(() => {
  const todo1 = {};
  todo1.title = "할일 1";

  const todo2 = { title: "할일 2" };
  todo2.content = "솔직할지도 QA";

  const todo3 = {
    title: "할일 3",
    content: "밋미",
  };

  const todo4 = {
    title: "할일 4",
    content: "운동하기",
  };

  console.log(todo1, todo2, todo3, todo4);
})();
