export {};

//クラスのメンバは書き換えできないようにする
//readonlyの時はpublicをつけなくて良い。
class VissaCard {
constructor(public readonly owner: string){
}
}

let myVisaCard = new VissaCard('ハムさん');
console.log(myVisaCard.owner);
//myVisaCard.owner = 'ベーコン' ；