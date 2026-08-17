// Desafio 73 - Maior número de um array

const numeros = [12, 45, 3, 89, 27, 6];

let maiorNumero = numeros[0];

for (const numero of numeros) {
  if (numero > maiorNumero) {
    maiorNumero = numero;
  }
}

console.log(`O maior número é ${maiorNumero}.`);