// 드롭다운 리스트 생성 - 자바스크립트

(() => {
  interface ICity {
    value: string;
    selected?: boolean;
  }

  interface IZipCode {
    value: number;
    selected?: boolean;
  }

  const cityList: ICity[] = [
    { value: "Seoul", selected: false },
    { value: "busan" },
    { value: "GwangJu", selected: true },
    // { value: 56789 },
  ];

  const zipcodeList: IZipCode[] = [
    { value: 12345, selected: false },
    { value: 34567, selected: true },
    { value: 56789 },
  ];

  // TODO: 아래와 같이 출력 되도록 함수 작성
  function createDropdownList(list: (ICity | IZipCode)[]) {
    let value;
    const options = list.map((item) => {
      value = item.value;
      return `<option selected="${item.selected ? "selected" : ""}">${
        typeof value === "string" ? value.toLowerCase() : value
      }</option>`;
    });
    return `<select>\n${options.join("\n")}\n</select>`;
  }

  console.log(createDropdownList(cityList));

  console.log(createDropdownList(zipcodeList));
})();
