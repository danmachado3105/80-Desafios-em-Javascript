// Desafio 74 - Contar vogais em uma frase

const frase = "O rato roeu a roupa do rei de Roma";
const vogais = "aeiouAEIOU";

let totalVogais = 0;

for (const letra of frase) {
  if (vogais.includes(letra)) {
    totalVogais++;
  }
}

console.log(`A frase tem ${totalVogais} vogais.`);