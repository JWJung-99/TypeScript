// 03/app.js 복사

import type { DataType } from "./math.js";
import MyMath, { sum as total, sub } from "./math.js";

const data: DataType = { a: 20, b: 10 };

console.log(total(data), sub(data));
console.log(MyMath.mul(data), MyMath.div(data));
