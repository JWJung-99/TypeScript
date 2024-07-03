// Queue - 일반 클래스

(() => {
  interface IStrQueue {
    data: string[];
    push(item: string): void;
    pop(): string | undefined;
  }

  interface INumQueue {
    data: number[];
    push(item: number): void;
    pop(): number | undefined;
  }

  class StringQueue implements IStrQueue {
    data: string[] = [];

    push(item: string) {
      this.data.push(item);
    }

    // 배열에 원소가 없을 수도 있기 때문에 string으로만 지정하면 에러가 발생!!
    pop(): string | undefined {
      return this.data.shift();
    }
  }

  class NumberQueue implements INumQueue {
    data: number[] = [];

    push(item: number) {
      this.data.push(item);
    }

    // 배열에 원소가 없을 수도 있기 때문에 number로만 지정하면 에러가 발생!!
    pop(): number | undefined {
      return this.data.shift();
    }
  }

  const sq = new StringQueue();
  sq.push("안녕하세요");
  sq.push("반갑습니다");
  sq.push("hello");

  console.log(sq.pop());
  console.log(sq.pop());
  // undefined일 수도 있으니까!!
  console.log(sq.pop()?.toUpperCase());

  const nq = new NumberQueue();
  nq.push(10);
  nq.push(20.1234);
  nq.push(300);

  console.log(nq.pop());
  console.log(nq.pop()?.toFixed(2));
  // undefined일 수도 있으니까!!
  console.log(nq.pop());
})();
