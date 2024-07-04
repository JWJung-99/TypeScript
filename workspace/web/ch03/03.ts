// Partial 유틸리티 타입
(() => {
  interface Todo {
    title: string;
    content: string;
  }

  // #1
  // interface PartialTodo extends Partial<Todo> {}

  // #2
  // type PartialTodo = Partial<Todo>;

  const todo1: Todo = {
    title: "할일 1",
    content: "내용 1",
  };

  // #3
  const todo2: Partial<Todo> = {
    title: "할일 2",
  };

  console.log(todo1, todo2);
})();
