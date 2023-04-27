//  string = refere-se a chaveA chaveB ; unknown = refere-se Valor A Valor B ; unknown é mais genérico que any
//  A tipagem abaixo elimina o auto complete pra digitar as posições do objeto
//  Não muito recomendado
const objectA: Record<string, unknown> = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objectA.chaveA = 'Outro valor';
objectA.chaveC = 'Nova chave';
console.log(objectA);

const objectB: {
  chaveA: string;
  readonly chaveB: string; //readonly mostra que a chave não pode ser alterada;
  chaveC?: string; //  chave opcional
  [key: string]: unknown; //  index signatures -> igual a Record<string, unknown> -> Utilizado quando necessário criar mais chaves no objeto durante o desenvolvimento do programa;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objectB.chaveA = 'Outro valor';
objectB.chaveC = 'Nova chave';
objectB.chaveD = 'Nova chave';
console.log(objectA);
