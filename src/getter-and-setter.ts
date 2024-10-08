export {};

// * owner
//   * 所有者
//   * 初期化時に設定できる。
//   * 途中で変更できない。
//   * 参照できる。
// * secretNumber
//   * 個人番号
//   * 初期化時に設定できる。
//   * 途中で変更できる。
//   * 参照できない。

//メンバ変数とメソッド名は重複できない。
class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }
  
  //getterは参照するメソッド
  get owner() {
    return this._owner;
  }
  //setterは値を設定するときのメソッド
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('はむさん', 1234567890);
//card.owner = 'Ham';
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());
// card.owner = 'Ham';
console.log(card.owner);
// card.secretNumber;
// card._secretNumber;
console.log(card.secretNumber);
