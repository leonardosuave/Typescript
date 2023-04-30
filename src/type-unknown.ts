// O unknown é o pai de todos os outros tipos (vem antes de todos na hierarquia)
// É uma forma mais segura do que o any

let x: any;
x = 100;
x = 'Leonardo';
x = 900;
x = '10';
const y = 800;
console.log(x + y); //10800, faz concatenação string + number
export { x };

let a: unknown;
a = 100;
a = 'Leonardo';
a = 900;
a = 10;
const b = 800;
if (typeof a === 'number') console.log(a + b); //  so faz a conta com unknown caso tenha uma checagem de tipo antes
