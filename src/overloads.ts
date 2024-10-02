export {};
//シグネチャ これから使う関数ではこのような型を使うよという意味
//これ以外のかたを使うとエラーになる
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go '));
//console.log(double(true));
