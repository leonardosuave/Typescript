//Deve cobrir todas as possibilidades de retorno, considerando string e number em a,b (no caso abaixo deve eliminar o retorno undefined)
const addOrConcat = (
  a: number | string,
  b: number | string
): number | string => {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
};

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
console.log(addOrConcat(10, '20'));
