// 함수 호환

import { Todo } from "./types/index";

(() => {
  type TodoRegister = Pick<Todo, "title" | "content">;
  type TodoList = Pick<Todo, "id" | "title" | "content" | "done">;

  const todo1: TodoRegister = {
    title: "할일 1",
    content: "등록에 사용",
  };

  const todo2: TodoList = {
    id: 0,
    title: "할일 목록",
    content: "목록에 사용",
    done: false,
  };

  function toString(todo: TodoRegister) {
    const str = `[TodoRegister] title: ${todo.title}, content: ${todo.content}`;

    return str;
  }

  // function toString(todo: TodoList) {
  //   const str = `[TodoRegister] title: ${todo.title}, content: ${todo.content}`;

  //   return str;
  // }

  console.log(toString(todo1));
  console.log(toString(todo2));

  // console.log(
  //   toString({
  //     id: 2,
  //     title: "할일 목록3",
  //     content: "목록3에 사용",
  //     done: false,
  //   })
  // );
})();
