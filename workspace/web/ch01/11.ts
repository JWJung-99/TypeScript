// 인터페이스 사용 - 클래스의 타입 지정

(() => {
  interface Score {
    kor: number;
    eng: number;
    sum(): number;
    avg(): number;
  }

  class HighSchool implements Score {
    kor: number;
    eng: number;

    constructor(kor: number, eng: number) {
      this.kor = kor;
      this.eng = eng;
    }

    sum() {
      return this.kor + this.eng;
    }

    avg() {
      return this.sum() / 2;
    }
  }

  const muji = new HighSchool(100, 90);
  console.log(muji.sum(), muji.avg());
})();
