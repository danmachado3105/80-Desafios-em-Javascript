// Desafio 49 - Simulando carrinho de compras

const carrinho = [59.90, 120, 35.50, 89.99];

let total = 0;

for (const preco of carrinho) {
  total += preco;
}

const totalComDesconto = total * 0.8;

console.log(`Valor total da compra: R$ ${total.toFixed(2)}`);
console.log(`Valor final com 20% de desconto: R$ ${totalComDesconto.toFixed(2)}`);