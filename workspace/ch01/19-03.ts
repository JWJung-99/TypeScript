// Enum으로 상수를 그룹화 - const Enum
// 19-02.ts 복사

(() => {
  const enum SubjectName {
    TYPE_SCRIPT = "TS",
    NEXT_JS = "NEXT",
  }

  function getSchedule(subject: string) {
    if (subject === SubjectName.TYPE_SCRIPT) {
      return "타입스크립트 수업은 이론 1주 + 프로젝트 1주입니다.";
    } else if (subject === SubjectName.NEXT_JS) {
      return "넥스트 수업은 이론 2주 + 프로젝트 4주입니다.";
    } else {
      return "이런 수업은 하지 않아요!";
    }
  }

  console.log(getSchedule(SubjectName.TYPE_SCRIPT));
  console.log(getSchedule(SubjectName.NEXT_JS));

  // console.log(SubjectName);
})();
