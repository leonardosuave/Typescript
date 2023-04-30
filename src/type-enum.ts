//Enum é uma estrutura de dados não ordenado;

// Enum numérico
enum Cores {
  Vermelho, // 0
  Azul, // 1
  Verde = 10, //  10  -> Altera o fluxo do indice 2 para 10
}
console.log(Cores);
console.log(Cores.Vermelho); // retorna seu indice(nome da chave)
console.log(Cores[1]); // retorna o valor do indice(valor da chave)

//Enum string
enum Cores2 {
  Vermelho, // 0
  Azul = 'Azul', // 1
  Verde = 10, //  Deve passar ou uma string ou setar um novo indice numérico para tornar o inicio de indice para os demais
  Amarelo, //  11
}
console.log(Cores2.Azul); //  retorna 'Azul'
