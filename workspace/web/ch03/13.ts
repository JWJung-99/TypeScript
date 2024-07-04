// instanceof 연산자

(() => {
  console.log(new Date() instanceof Date);
  console.log(new Array([]) instanceof Array);
  console.log(new RegExp("") instanceof RegExp);
  console.log([] instanceof Array);
  console.log(/'h'/ instanceof RegExp);
  console.log({} instanceof Object);
  console.log(new Object() instanceof Object);
  console.log(new Array([]) instanceof Object);
  console.log(/''/ instanceof Object);
  console.log(new XMLHttpRequest() instanceof XMLHttpRequest);
  console.log(new XMLHttpRequest() instanceof Object);

  console.log(document.querySelector("div") instanceof Element);
  console.log(document.querySelector("a") instanceof HTMLElement);

  interface ITodo {
    title: string;
    content: string;
  }

  class Todo implements ITodo {
    title: string;
    content: string;

    constructor(title: string, content: string) {
      this.title = title;
      this.content = content;
    }

    done() {
      console.log("완료");
    }
  }

  function getTitle(todo: ITodo | string[]) {
    if (todo instanceof Todo) {
      return todo.title;
    } else if (todo instanceof Array) {
      return todo[0];
    }
  }

  const todo1: Todo = new Todo("할일 1", "내용 1");

  const todo2: [string, string] = ["할일 2", "내용 2"];

  console.log(getTitle(todo1));
  todo1.done();
  console.log(getTitle(todo2));
})();
