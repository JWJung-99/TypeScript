// Pick 유틸리티 타입

// export interface Todo {
//   id: number;
//   title: string;
//   content: string;
//   done: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }

import { TodoList, TodoRegister, User } from "./types/index";

(() => {
  // interface TodoRegister extends Pick<Todo, "title" | "content"> {}
  // interface TodoList
  //   extends Pick<Todo, "id" | "title" | "done" | "createdAt"> {}

  // type TodoRegister = Pick<Todo, "title" | "content">;
  // type TodoList = Pick<Todo, "id" | "title" | "done" | "updatedAt">;

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

  const user: User = {
    id: 1,
    name: "동그라미",
  };

  console.log(user);
})();
