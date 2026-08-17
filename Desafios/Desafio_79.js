// Desafio 79 - Calculadora simples com switch

function calcular(numero1, numero2, operador) {
  switch (operador) {
    case "+":
      return numero1 + numero2;
    case "-":
      return numero1 - numero2;
    case "*":
      return numero1 * numero2;
    case "/":
      return numero1 / numero2;
    default:
      return "Operador inválido";
  }
}

console.log(calcular(10, 5, "+"));
console.log(calcular(10, 5, "*"));