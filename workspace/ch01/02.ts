// 기본 타입

(() => {
  // [타입 추론]
  // let str = "Hello";

  let str: string = "Hello";
  let age: number = 30;
  let done: boolean;
  done = false;

  let done2; // any
  done2 = false;
  done2 = 500;

  let todo: object = { title: "도시락 싸오기", done: true };
  let todoList: Array<string> = ["도시락 싸오기", "프로젝터 밝기 조절"];
  let todoList2: string[] = ["도시락 싸오기", "프로젝터 밝기 조절"];

  // tuple: 길이가 고정되고 각 요소의 타입이 정의된 배열
  let items: [string, number] = ["길용쌤", 39];
  let userName: any = "이일구";
  userName = 219;

  let nullVal: null = null;
  let emptyVal: undefined = undefined;
})();
