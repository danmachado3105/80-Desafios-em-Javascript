// Desafio 59 - Listando propriedades com for...in

const pessoa = {
  nome: "Maria Silva",
  idade: 28,
  profissao: "Desenvolvedora",
};

for (const propriedade in pessoa) {
  console.log(`${propriedade}: ${pessoa[propriedade]}`);
}