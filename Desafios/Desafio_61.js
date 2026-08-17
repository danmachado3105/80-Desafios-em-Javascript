// Desafio 61 - Destructuring em objetos

const pessoa = {
  nome: "Maria Silva",
  idade: 28,
  email: "maria@email.com",
};

const { nome, idade, email } = pessoa;

console.log(nome);
console.log(idade);
console.log(email);