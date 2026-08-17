// Desafio 55 - Função com objeto

function apresentar(pessoa) {
  return "Meu nome é " + pessoa.nome + ", tenho " + pessoa.idade +
    " anos e trabalho como " + pessoa.profissao + ".";
}

const pessoa = {
  nome: "Maria Silva",
  idade: 28,
  profissao: "Desenvolvedora",
};

console.log(apresentar(pessoa));