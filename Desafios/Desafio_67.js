// Desafio 67 - Trabalhando com datas

const dataAtual = new Date();

const dia = dataAtual.getDate();
const mes = dataAtual.getMonth() + 1;
const ano = dataAtual.getFullYear();

console.log(`Hoje é ${dia}/${mes}/${ano}.`);