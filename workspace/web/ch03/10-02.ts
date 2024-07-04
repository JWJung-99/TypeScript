// TODO: JS로 작성된 코드를 TS로 리팩토링. 로직은 수정하지 말고 타입만 추가 정의
// 10-01.js 복사
(() => {
  interface Todo {
    title: string;
    content: string;
  }

  // const todo1: Todo = {}; => 에러 발생!
  const todo1 = {} as Todo; // 비어 있지만 Todo라고 단언!
  todo1.title = "할일 1";

  const todo2 = { title: "할일 2" } as Todo; // content가 없지만 Todo라고 단언!
  todo2.content = "솔직할지도 QA";

  const todo3: Todo = {
    title: "할일 3",
    content: "밋미",
  };

  const todo4: Todo = {
    title: "할일 4",
    content: "운동하기",
  };

  console.log(todo1, todo2, todo3, todo4);
})();
