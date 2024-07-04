// 타입 단언(assertion)

(() => {
  // function getMsg(msg) {
  //   return msg;
  // }

  function getMsg<T>(msg: T) {
    return msg;
  }

  // const getMsg = <T>(msg: T): T => {
  //   return msg;
  // }

  // const msg1 = getMsg(123.456) as number;
  // console.log(msg1);

  const msg2 = getMsg<string>("hello");
  console.log(msg2);
})();
