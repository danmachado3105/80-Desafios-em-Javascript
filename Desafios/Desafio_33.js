// Desafio 33 - Cálculo de IMC

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

const imc = calcularIMC(70, 1.75);

console.log(`Seu IMC é ${imc.toFixed(2)}.`);