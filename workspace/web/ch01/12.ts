// 인터페이스 정의 - 객체의 속성과 메서드, 익명 함수, 선택적 속성, 읽기 전용 속성

(() => {
  interface ITodo {
    readonly id: number;
    title: string;
    content: string;
    done?: boolean;
  }

  // 표현식 함수의 interface
  interface IToggleDone {
    (todo: ITodo): void;
  }

  const todo1: ITodo = {
    id: 2,
    title: "할일 1",
    content: "인터페이스 사용",
    done: true,
  };

  todo1.title = "타이틀 수정";
  // todo1.id = 6; // 컴파일 에러 => readonly 속성을 가진 값을 수정

  const todo2: ITodo = {
    id: 2,
    title: "할일 2",
    content: "인터페이스 사용 2",
  };

  const toggleDone: IToggleDone = (todo) => {
    todo.done = !todo.done;
  };

  console.log(todo1, todo2);
  toggleDone(todo1);
  toggleDone(todo2);
  console.log(todo1, todo2);
})();
