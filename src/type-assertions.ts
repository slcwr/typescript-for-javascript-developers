export {};

let name: any = 'Ham';

let length = (name as string).length;

//こっちは非推奨（Reactのjsxに似てるから）
//let length = (<string>name).length;


// length = 'foo';
