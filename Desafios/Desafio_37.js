// Desafio 37 - Reutilizando código (calcularTroco)

function calcularTroco(valorCompra, valorPago) {
  return valorPago - valorCompra;
}

const troco = calcularTroco(35.90, 50);

console.log(`O troco a ser devolvido é R$ ${troco.toFixed(2)}.`);