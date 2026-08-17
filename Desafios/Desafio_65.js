// Desafio 65 - Spread operator com objetos

const dadosNome = { nome: "Maria Silva" };
const dadosIdade = { idade: 28 };

const pessoaCompleta = { ...dadosNome, ...dadosIdade };

console.log(pessoaCompleta);