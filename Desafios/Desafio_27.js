// Desafio 27 - Idade ao longo dos anos

const anoNascimento = 2000;
const anoAtual = 2026;

for (let ano = anoNascimento; ano <= anoAtual; ano++) {
  const idade = ano - anoNascimento;
  console.log(`Em ${ano}, a pessoa tinha ${idade} anos.`);
}