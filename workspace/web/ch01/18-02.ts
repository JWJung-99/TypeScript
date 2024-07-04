// let 사용
// 18-01.ts 복사

(() => {
  let ts = "TypeScript";
  let next = "Next.js";

  function getSchedule(subject: string) {
    if (subject === ts) {
      return "타입스크립트 수업은 이론 1주 + 프로젝트 1주입니다.";
    } else if (subject === next) {
      return "넥스트 수업은 이론 2주 + 프로젝트 4주입니다.";
    } else {
      return "이런 수업은 하지 않아요!";
    }
  }

  console.log(getSchedule(ts));
  console.log(getSchedule(next));
})();
