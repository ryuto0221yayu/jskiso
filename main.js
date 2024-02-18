'use strict';

console.log('HelloWorld');
console.log(3 + 7);
console.log('3+7');
console.log(5 * 2);
console.log('プログラミング' + 'スクール');
let name = 'プログラミングスクール';
console.log(name);
let a = 5;
console.log(a * a);

name = 'キャリアテック';
console.log(name);

const language = '日本語';
console.log(`${language}を話せます`);

{
  const name = '山口 理宇斗';
  const age = 19;
  console.log(`僕の名前は${name}です。\n現在は${age}歳です。よろしくお願いします。`);
}

{
  const level = 20;
  if (level >= 10) {
    console.log('強い');
  } else if (level < 10) {
    console.log('弱い');
  }
}

{
  const n = 2;
  switch (n) {
    case 1:
      console.log('大吉');
      break;
    case 2:
      console.log('吉');
      break;
    case 3:
      console.log('小吉');
      break;
  }
}
const n3 = 'Fizz';
const n5 = 'Buzz';
const n35 = 'FizzBuzz';
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0){
    console.log(`${n35}`);
  } else if (i % 5 == 0) {
    console.log(`${n5}`);
  } else if (i % 3 == 0 ) {
    console.log(`${n3}`);
  } else {
    console.log(i);
  }

}
