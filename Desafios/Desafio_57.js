// Desafio 57 - Filtrando maiores de idade

const pessoas = [
  { nome: "Ana", idade: 22 },
  { nome: "Bruno", idade: 17 },
  { nome: "Carla", idade: 35 },
];

for (const pessoa of pessoas) {
  if (pessoa.idade >= 18) {
    console.log(pessoa.nome);
  }
}