//  undefined quando o valor da variável ainda não foi definido (Não muito utilizado)
//  Utilizado quando checado por undefined e atribui um type caso verdadeiro (nunca retorna undefined, sempre um novo type)
let x;
if (typeof x === 'undefined') x = 20; //  x passa a ser number
console.log(x * 2);

const createPerson = (
  firstName: string,
  lastName?: string
): {
  firstName: string;
  lastName?: string;
} => {
  return {
    firstName,
    lastName,
  };
};

//  null -> sempre verificar o typeof para atribuição de
//  Utilizado para especificar o retorno da função (null ou algo que queira)
const squareOf = (x: any) => {
  if (typeof x === 'number') return x * x;
  return null;
};

const squareOf2Number = squareOf(2);
const squareOf2String = squareOf('2');

if (typeof squareOf2Number === null) {
  console.error('Conta inválida');
} else {
  console.log(squareOf2Number);
}

if (typeof squareOf2String === null) {
  console.error('Conta inválida');
} else {
  console.log(squareOf2String);
}
