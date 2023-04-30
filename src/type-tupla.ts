//  Tupla é um array com tipos especificos e tamanho fixos
const dadosCliente1: [number, string, string] = [1, 'Luiz', 'Miranda'];
console.log(dadosCliente1);

dadosCliente1[0] = 100; // Aceita mudar valores desde que seja do mesmo tipo
dadosCliente1[1] = 'Tassiane';
console.log(dadosCliente1);

//readonly
const array1: readonly string[] = ['Leonardo', 'suave'];
const array2: readonly [number, string, string] = [27, 'Leonardo', 'Suave'];
const array3: ReadonlyArray<string> = ['Leonardo', 'Suave'];

console.log(array1);
console.log(array2);
console.log(array3);
