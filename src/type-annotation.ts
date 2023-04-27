/* eslint-disable */

//  Básicos
let nome: string = 'Leonardo';                    //  Qualquer tipo de string
let idade: number = 27;                           //  10, 1.57, exadecimal, binários
let adulto: boolean = true;                       //  true or false
let simbolo: symbol = Symbol('qualquer-symbol');  //  symbol

//  Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: Number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b', 'c'];
let arrayDeStrings2: String[] = ['a', 'b', 'c'];

//  Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {   //  adulto?: significa que pode ser opcional (boolean or undefined)
  nome: 'Leonardo',
  idade: 27,
};

//  Funções
const soma = (x: number, y: number): number => {
  return x + y
};
const soma2 = (x: number, y: number) => { //  Não precisa tipar o retorno da função (x + y é um number já)
  return x + y
};
const soma3: (x: number, y: number) => number = (x, y) => x + y // Tipa como se fosse arrow function, atribuindo x e y como number e o return vem depois da ultima arrow function
