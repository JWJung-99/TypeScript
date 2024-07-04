// 인터페이스 상속

(() => {
  interface Todo {
    title: string;
    content: string;
  }

  interface TodoInfo extends Todo {
    id: number;
    done: boolean;
  }

  const todo1: Todo = {
    title: "할 일",
    content: "너무 많아",
  };

  const todo2: TodoInfo = {
    title: "할 일 정보",
    content: "너무 많은 할 일",
    id: 1,
    done: false,
  };

  console.log(todo1, todo2);
})();
