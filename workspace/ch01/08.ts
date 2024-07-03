// 인터섹션 타입(intersection type)

(() => {
  type Todo = {
    title: string;
    content: string;
  };

  type TodoInfo = Todo & {
    id: number;
    done: boolean;
  };

  const todo1: Todo = {
    title: "할 일 목록 1",
    content: "밋미와 솔직할지도",
  };
  const todo2: TodoInfo = {
    title: "할 일 목록 2",
    content: "밋미 로그인, 솔직할지도 QA",
    id: 2,
    done: false,
  };

  console.log(todo1, todo2);
})();
