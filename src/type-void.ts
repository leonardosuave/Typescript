/* eslint-disable prettier/prettier */
//  VOID: Quando uma função ou método não retorna nada. ex console.log()

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

//  script mode - Precisa export para não gerar erro em relação a pessoa do arquivo type-annotation
const pessoa = {
  nome: 'Leonardo',
  sobrenome: 'Suave',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};
semRetorno('Leonardo', 'Suave');
pessoa.exibirNome();

export { pessoa };
