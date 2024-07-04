// 03/math.js 복사
export interface DataType {
  a: number;
  b: number;
}

// Named export
export function sum(data: DataType) {
  return data.a + data.b;
}

export function sub(data: DataType) {
  return data.a - data.b;
}

function mul(data: DataType) {
  return data.a * data.b;
}

function div(data: DataType) {
  return data.a / data.b;
}

// Default export
export default { mul, div };
