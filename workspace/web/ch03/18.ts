// 함수 오버로딩 - 동일한 이름의 함수를 중복으로 정의

(() => {
  interface TodoRegister {
    title: string;
    content: string;
  }

  interface TodoList {
    id: number;
    done: boolean;
    title: string;
    updatedAt: Date;
  }

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

  // 함수 시그니처 => 껍데기만 만들기
  function toString(todo: TodoList): string;
  function toString(todo: TodoRegister): string;

  // 실제 호출하는 부분
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
