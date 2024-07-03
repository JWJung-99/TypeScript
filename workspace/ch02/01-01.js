// 클래스 정의 - 자바스크립트
// 점수는 수정 불가하고 평균은 avg() 메서드만 사용

(() => {
  class HighSchool {
    constructor(kor, eng) {
      this.kor = kor;
      this.eng = eng;
    }

    sum() {
      return this.kor + this.eng;
    }

    avg() {
      return Math.round(this.sum() / 2);
    }
  }

  const s1 = new HighSchool(100, 91);
  console.log("평균 " + s1.avg());

  console.log("평균 " + s1.sum() / 2);
})();
