// 변수와 객체의 타입 추론

(() => {
  const name = "동그라미";
  let age = 27;

  let address;
  address = "동대문";
  address = true;

  console.log(name, age, address);

  interface Todo {
    title: string;
    content: string;
  }

  const todo1: Todo = {
    title: "할 일 1",
    content: "내용 1",
  };

  const todo2: Todo = {
    title: "할 일 2",
    content: "Hello",
  };

  function printTodo(todo: Todo) {
    console.log(todo.title, todo.content.toLowerCase());
  }

  printTodo(todo1);
  printTodo(todo2);
})();
