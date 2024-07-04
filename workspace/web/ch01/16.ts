// 인터페이스 다중 상속

(() => {
  interface Todo {
    title: string;
    content: string;
  }

  interface TodoList {
    id: number;
    title: string;
    done: boolean;
  }

  interface TodoInfo extends Todo, TodoList {
    createdAt: Date;
    updatedAt: Date;
  }

  const todo1: Todo = {
    title: "할 일",
    content: "등록할 때 사용",
  };

  const todo2: TodoList = {
    id: 1,
    title: "할일 2",
    done: false,
  };

  const todo3: TodoInfo = {
    title: "할 일 정보",
    content: "시간을 포함하여 상세 조회할 때 사용",
    id: 1,
    done: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  console.log(todo1, todo2, todo3);
})();
