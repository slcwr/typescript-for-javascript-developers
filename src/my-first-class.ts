export {};

class Person {
  name: string;
  age: number;
  //コンストラクタに型を指定するとエラーになる。（言語仕様）
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
let taro = new Person('Taro', 30);
console.log(taro.profile());
// let hanako = new Person();
