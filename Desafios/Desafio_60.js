// Desafio 60 - Cálculo de compra

const produto = {
  nome: "Fone de ouvido",
  preco: 89.90,
  quantidade: 3,
};

const totalCompra = produto.preco * produto.quantidade;

console.log(`O valor total da compra é R$ ${totalCompra.toFixed(2)}.`);