// 상수를 직접 그룹화
// 18-03.ts 복사

(() => {
  type Readonly = {
    readonly TYPE_SCRIPT: number;
    readonly NEXT_JS: number;
  };

  // 그룹화되는 상수끼리 중복되지 않도록 값을 지정
  const subjectName: Readonly = {
    TYPE_SCRIPT: 0,
    NEXT_JS: 1,
  };

  function getSchedule(subject: number) {
    if (subject === subjectName.TYPE_SCRIPT) {
      return "타입스크립트 수업은 이론 1주 + 프로젝트 1주입니다.";
    } else if (subject === subjectName.NEXT_JS) {
      return "넥스트 수업은 이론 2주 + 프로젝트 4주입니다.";
    } else {
      return "이런 수업은 하지 않아요!";
    }
  }

  console.log(getSchedule(subjectName.TYPE_SCRIPT));
  console.log(getSchedule(subjectName.NEXT_JS));
})();
