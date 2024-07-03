// Named export
export function sum(data) {
  return data.a + data.b;
}

export function sub(data) {
  return data.a - data.b;
}

function mul(data) {
  return data.a * data.b;
}

function div(data) {
  return data.a / data.b;
}

// Default export
export default { mul, div };
