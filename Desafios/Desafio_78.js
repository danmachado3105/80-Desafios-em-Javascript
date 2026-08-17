// Desafio 78 - Remover duplicados de um array

const numeros = [1, 2, 2, 3, 4, 4, 5, 1];

const numerosSemDuplicados = [...new Set(numeros)];

console.log(numerosSemDuplicados);