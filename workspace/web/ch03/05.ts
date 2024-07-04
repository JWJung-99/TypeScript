// Omit 유틸리티 타입 - 외부 파일에 type 정의

import { TodoList, TodoRegister } from "./types/index";

(() => {
  // interface TodoRegister extends Pick<Todo, "title" | "content"> {}
  // interface TodoList extends Omit<Todo, "content" | "createdAt"> {}

  // type TodoRegister = Pick<Todo, "title" | "content">;
  // type TodoList = Omit<Todo, "content" | "createdAt">;

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

  console.log(todo1, todo2);
})();
