// type literal é um tipo por valor. (uma const é um literal, já que não pode ser alterado valor)

let x = 10; //  eslint-disable-line
x = 0b1010;

//Não indicado -> setar let as const
let a: 100 = 100; //  eslint-disable-line
//  a = 120;  Não deixar atribuir 120 pq ja foi atribuido como 100

let b = 120 as const; //  eslint-disable-line

const pessoa = {
  name: 'Leonardo' as const, // Agora pessoa.name é tipado como Leonardo
  sobrenome: 'Suave',
};

const y = 10; // Isso é um tipo literal

export { x };
