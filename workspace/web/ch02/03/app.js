// named export
// import { sum, sub } from "./math.js";

// default export
// import MyMath from "./math.js";

// 둘 다
import MyMath, { sum as total, sub } from "./math.js";

const data = { a: 20, b: 10 };

console.log(total(data), sub(data));
console.log(MyMath.mul(data), MyMath.div(data));
