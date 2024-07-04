// 함수가 null을 리턴할 수 있을 경우

(() => {
  const a = document.querySelector<HTMLAnchorElement>(
    'a[href="dist/ch03/11.js"]'
  );

  // (⚠️ 위험) Non-null assertion
  // a!.innerHTML += "click";

  if (a !== null) {
    a.innerHTML += "click";
    console.log(a.href);
  }
})();
