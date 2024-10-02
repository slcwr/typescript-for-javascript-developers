export {};

class Person {
  public name: string;
  // private age: number;
  public age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
  //privateなメンバでも、内部のメソッドからは参照できる
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }
　//thisは継承元でしか使えないが、protectedになっていたら使える
  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Android('Taro', 30, 'Japan');
console.log(taro.profile());
console.log(taro.name);
console.log(taro.age);
// let hanako = new Person();
