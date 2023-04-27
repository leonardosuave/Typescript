//  Array<T>: GENÉRICO -> Array<number>
//  T[]: O array é do tipo T -> string[]
const multiplicaArgs = (...args: Array<number>): number => {
  return args.reduce((acc, valor) => acc * valor, 1);
};

const concatenaStrings = (...args: string[]) => {
  return args.reduce((acc, valor) => acc + ' ' + valor);
};

const toUpperCase = (...args: string[]) => {
  return args.map((valor) => valor.toUpperCase());
};

const result = multiplicaArgs(2, 5, 8); // result fica como number pq o return da função é deferido como number
const concatResult = concatenaStrings('leonardo', 'suave'); // concatResult fica como string pq o return da função é deferido como string
const toUpperCaseResult = toUpperCase('a', 'b', 'c');
console.log(result);
console.log(concatResult);
console.log(toUpperCaseResult);
