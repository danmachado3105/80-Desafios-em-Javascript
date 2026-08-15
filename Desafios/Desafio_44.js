// Desafio 44 - Somar todos os números

const numeros = [4, 8, 15, 16, 23, 42, 3, 7, 11, 9];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

console.log(`A soma de todos os números é ${soma}.`);