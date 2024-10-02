export {};

let name = 'Atsushi';

name = 'Ham';

//型アサーションで定数に書き換える
let nickname = 'Ham' as const;
nickname = 'Ham';

//as constで全ての型がreadonlyになる
let profile = {
  name: 'Atsushi',
  height: 178
} as const;

// profile.name = 'Ham';
// profile.height = 180;
