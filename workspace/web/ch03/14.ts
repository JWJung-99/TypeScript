// in 연산자
// 04.ts 복사
import { Todo } from "./types/index";

(() => {
  type TodoRegister = Pick<Todo, "title" | "content">;
  type TodoList = Pick<Todo, "id" | "title" | "done" | "updatedAt">;

  const todo1: TodoRegister = {
    title: "할일 1",
    content: "등록에 사용",
  };

  const todo2: TodoList = {
    title: "할일 목록",
    id: 0,
    done: false,
    updatedAt: new Date(),
  };

  function toString(todo: TodoRegister | TodoList) {
    let str = "";

    if ("content" in todo) {
      str = `[TodoRegister] title: ${todo.title}, content: ${todo.content}`;
    } else {
      str = `[TodoList] id: ${todo.id}, title: ${todo.title}, done: ${todo.done}, updatedAt: ${todo.updatedAt}`;
    }

    return str;
  }

  console.log(toString(todo1));
  console.log(toString(todo2));
})();
