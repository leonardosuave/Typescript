//  A função ou método nunca vai retornar nada, como um erro

const newError = (): never => {
  throw new Error('Erro qualquer');
};

newError();
