export interface Todo {
  id: number;
  title: string;
  content: string;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TodoInfo extends Omit<Todo, "createdAt"> {}
export interface TodoList extends Omit<TodoInfo, "content"> {}
export interface TodoRegister extends Pick<Todo, "title" | "content"> {}
