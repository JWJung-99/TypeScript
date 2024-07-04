(() => {
  // TODO: 에러나 경고가 발생하는 부분에 적절한 타입 선언

  // TODO: Todo Type 지정
  interface TodoItem {
    id: number;
    title: string;
    done: boolean;
  }

  let todoItems: TodoItem[];

  // api
  function fetchTodoItems() {
    const todos: TodoItem[] = [
      { id: 1, title: "안녕", done: false },
      { id: 2, title: "타입", done: false },
      { id: 3, title: "스크립트", done: false },
    ];
    return todos;
  }

  // crud methods
  function fetchTodos() {
    const todos = fetchTodoItems();
    return todos;
  }

  // 할 일 등록
  function addTodo(todo: TodoItem) {
    todoItems.push(todo);
  }

  // 할 일 삭제
  function deleteTodo(index: number) {
    todoItems.splice(index, 1);
  }

  // 할 일 완료
  function completeTodo(index: number) {
    // todo.done = true;
    // todoItems.splice(index, 1, todo);
    todoItems[index - 1].done = true;
  }

  // business logic
  function logFirstTodo() {
    return todoItems[0];
  }

  function showCompleted() {
    return todoItems.filter((item) => item.done);
  }

  function addTwoTodoItems() {
    // TODO: addTodo() 함수를 두 번 호출하여 todoItems에 할일 2개 추가
    addTodo({ id: 4, title: "잘가", done: false });
    addTodo({ id: 5, title: "자바스크립트", done: false });
  }

  // 1. Todo 목록을 가져온다.
  todoItems = fetchTodos();
  // 2. 2개의 Todo를 등록한다.
  addTwoTodoItems();

  completeTodo(2);
  completeTodo(4);

  deleteTodo(2);
  console.log(logFirstTodo());
  console.log(showCompleted());
})();
