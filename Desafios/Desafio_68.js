// Desafio 68 - Modularização com export/import
// Este arquivo exporta a função somar (formato CommonJS, usado pelo Node.js)

function somar(a, b) {
  return a + b;
}

module.exports = somar;