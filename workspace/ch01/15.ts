// 인터페이스 상속 - 계층 구조
// 14.ts 복사

(() => {
  interface Todo {
    title: string;
    content: string;
  }

  interface TodoInfo extends Todo {
    id: number;
    done: boolean;
  }

  interface TodoInfoTime extends TodoInfo {
    createdAt: Date;
    updatedAt: Date;
  }

  const todo1: Todo = {
    title: "할 일",
    content: "등록할 때 사용",
  };

  const todo2: TodoInfo = {
    title: "할 일 정보",
    content: "상세 조회할 때 사용",
    id: 1,
    done: false,
  };

  const todo3: TodoInfoTime = {
    title: "할 일 정보",
    content: "시간을 포함하여 상세 조회할 때 사용",
    id: 1,
    done: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  console.log(todo1, todo2, todo3);
})();
