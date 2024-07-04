// Queue - 제네릭 클래스
// 07-01.ts 복사

(() => {
  interface IQueue<T> {
    data: T[];
    push(item: T): void;
    pop(): T | undefined;
  }

  class Queue<T> implements IQueue<T> {
    data: T[] = [];

    push(item: T) {
      this.data.push(item);
    }

    // 배열에 원소가 없을 수도 있기 때문에 string으로만 지정하면 에러가 발생!!
    pop(): T | undefined {
      return this.data.shift();
    }
  }

  class Stack<T> implements IQueue<T> {
    data: T[] = [];

    push(item: T) {
      this.data.push(item);
    }

    // 배열에 원소가 없을 수도 있기 때문에 string으로만 지정하면 에러가 발생!!
    pop(): T | undefined {
      return this.data.pop();
    }
  }

  const sq = new Queue<string>();
  sq.push("안녕하세요");
  sq.push("반갑습니다");
  sq.push("hello");

  console.log(sq.pop());
  console.log(sq.pop());
  // undefined일 수도 있으니까!!
  console.log(sq.pop()?.toUpperCase());

  const nq = new Queue<number>();
  nq.push(10);
  nq.push(20.1234);
  nq.push(300);

  console.log(nq.pop());
  console.log(nq.pop()?.toFixed(2));
  // undefined일 수도 있으니까!!
  console.log(nq.pop());

  const ns = new Stack<number>();
  ns.push(10);
  ns.push(20.1234);
  ns.push(300);

  console.log(ns.pop());
  console.log(ns.pop()?.toFixed(2));
  // undefined일 수도 있으니까!!
  console.log(ns.pop());
})();
