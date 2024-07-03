// Required 유틸리티 타입
(() => {
  interface Todo {
    title: string;
    content?: string;
  }

  // #1
  // interface RequiredTodo extends Required<Todo> {}

  // #2
  // type RequiredTodo = Required<Todo>;

  const todo1: Todo = {
    title: "할일 1",
    content: "내용 1",
  };

  // #3
  const todo2: Required<Todo> = {
    title: "할일 2",
    content: "내용 2",
  };

  console.log(todo1, todo2);
})();
