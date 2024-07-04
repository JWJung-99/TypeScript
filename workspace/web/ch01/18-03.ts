// const 사용
// 18-02.ts 복사

(() => {
  const TYPE_SCRIPT = "TypeScript";
  const NEXT_JS = "Next.js";

  function getSchedule(subject: string) {
    if (subject === TYPE_SCRIPT) {
      return "타입스크립트 수업은 이론 1주 + 프로젝트 1주입니다.";
    } else if (subject === NEXT_JS) {
      return "넥스트 수업은 이론 2주 + 프로젝트 4주입니다.";
    } else {
      return "이런 수업은 하지 않아요!";
    }
  }

  console.log(getSchedule(TYPE_SCRIPT));
  console.log(getSchedule(NEXT_JS));
})();
