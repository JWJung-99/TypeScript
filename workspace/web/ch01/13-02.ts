// 인덱스 시그니처 - 배열

(() => {
  interface MixedArray {
    [index: number]: string | number;
  }

  const arr1: Array<string> = ["hello", "world"];
  const arr2: number[] = [10, 20, 30];
  const arr3: (string | number)[] = ["hello", 30];

  console.log(arr1, arr2, arr3);

  const arr4: MixedArray = ["hello", 30, 100, "world"];
  const arr5: MixedArray = [30, 100, "hello", "world"];

  console.log(arr4, arr5);
})();
