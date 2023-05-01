//  Type Alias - variaveis criadas para setar especificamente algo que será inserido como um tipo em outras funcoes ou métodos
//  Semelhante a Interfaces
type Idade = number;
type Person = {
  name: string;
  secondName: string;
  idade: Idade;
  salary: number;
  preferyColor?: string;
};

type colorRGB = 'Red' | 'Green' | 'Blue';
type colorCMYK = 'Cyano' | 'Magenta' | 'Yellow' | 'Black';
type preferyColor = colorRGB | colorCMYK;

//  Setando valores
const newPerson: Person = {
  idade: 30,
  name: 'Leonardo',
  salary: 200,
  secondName: 'Suave',
};

export function setColor(pessoa: Person, color: preferyColor): Person {
  return { ...pessoa, preferyColor: color };
}

console.log(setColor(newPerson, 'Blue'));
