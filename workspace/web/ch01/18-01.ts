// 상수가 필요한 경우

(() => {
  function getSchedule(subject: string) {
    if (subject === "TypeScript") {
      return "타입스크립트 수업은 이론 1주 + 프로젝트 1주입니다.";
    } else if (subject === "Next.js") {
      return "넥스트 수업은 이론 2주 + 프로젝트 4주입니다.";
    } else {
      return "이런 수업은 하지 않아요!";
    }
  }

  console.log(getSchedule("TypeScript"));
  console.log(getSchedule("Next.js"));
})();
