// Desafio 18 - Condições compostas

const numero1 = 4;
const numero2 = 4;

const ambosPares = numero1 % 2 === 0 && numero2 % 2 === 0;
const saoIguais = numero1 === numero2;

console.log(ambosPares && saoIguais);