// Mapped 타입 - 매핑 수정자

(() => {
  interface Todo {
    id: number;
    title: string;
    content: string;
  }

  // type ReadonlyTodo = Readonly<Todo>;
  // type PartialTodo = Partial<Todo>;

  type ReadonlyTodo = {
    readonly [Prop in keyof Todo]: string;
  };

  type PartialTodo = {
    [P in keyof Todo]?: Todo[P];
  };

  type MyPartial<T> = {
    [P in keyof T]?: T[P];
  };

  const todo1: MyPartial<Todo> = {
    title: "할일 1",
    content: "내용 1",
  };

  todo1.title = "수정";
  console.log(todo1);
})();
