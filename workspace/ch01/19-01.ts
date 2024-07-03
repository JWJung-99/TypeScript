// Enum으로 상수를 그룹화 -숫자형
// 18-04.ts 복사

(() => {
  enum SubjectName {
    TYPE_SCRIPT = 100,
    NEXT_JS,
  }

  function getSchedule(subject: number) {
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

  console.log(SubjectName[100]);
})();
