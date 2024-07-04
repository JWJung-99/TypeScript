// Map - 제네릭 클래스
// 07-01.ts 복사

(() => {
  interface IMap<K extends string | number, V> {
    // items: { [key: string]: string };
    set(key: K, value: V): void;
    get(key: K): V;
    delete(key: K): void;
    has(key: K): boolean;
    clear(): void;
  }

  class MyMap<K extends string | number, V> implements IMap<K, V> {
    private items: { [key: string]: V } = {};

    set(key: K, value: V) {
      this.items[key] = value;
    }

    get(key: K): V {
      return this.items[key];
    }

    delete(key: K) {
      delete this.items[key];
    }

    has(key: K): boolean {
      return this.items[key] !== undefined;
    }

    clear() {
      this.items = {};
    }
  }

  // const map = new MyMap<string, string>();
  // JavaScript에 내장된 Map
  const map = new Map<string, string | number>();

  // 데이터 추가
  map.set("hello", "world");
  map.set("js", "JavaScript");
  map.set("ts", "TypeScript");
  map.set("next", 14.2234);

  // 데이터 조회
  const m1 = map.get("next");
  if (typeof m1 === "string") {
    // 타입 가드
    console.log(m1.toUpperCase());
  } else if (typeof m1 === "number") {
    console.log(m1.toFixed(2));
  }

  // 데이터 삭제
  map.delete("hello");

  // 데이터 존재 여부
  console.log(map.has("ts"));

  // 데이터 초기화
  map.clear();

  console.log(map);
})();
