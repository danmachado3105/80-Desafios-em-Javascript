// Desafio 45 - Média de notas

const notas = [8, 6, 7, 9];

let soma = 0;
for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

const media = soma / notas.length;

if (media >= 7) {
  console.log(`Média: ${media.toFixed(1)} - Aprovado`);
} else {
  console.log(`Média: ${media.toFixed(1)} - Reprovado`);
}