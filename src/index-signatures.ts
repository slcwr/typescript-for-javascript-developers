export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Ham', underTwenty: false };

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }

profile.name = 'am';
profile.age = 43;
profile.nationality = 'Japan';

console.log(profile.name);
console.log(profile.age);
console.log(profile.nationality);
console.log(profile.underTwenty);