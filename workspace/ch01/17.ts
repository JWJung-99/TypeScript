// 인터페이스 선언 병합
// 16.ts 복사

(() => {
  interface Todo {
    title: string;
    content: string;
  }

  interface Todo {
    id: number;
    title: string;
    // title: number;
    done: boolean;
  }

  const todo3: Todo = {
    title: "할 일 정보",
    content: "시간을 포함하여 상세 조회할 때 사용",
    id: 1,
    done: false,
  };

  console.log(todo3);
})();
