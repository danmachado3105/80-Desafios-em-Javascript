// Desafio 72 - Verificar palíndromo

function ehPalindromo(texto) {
  const textoInvertido = texto.split("").reverse().join("");
  return texto === textoInvertido;
}

console.log(ehPalindromo("arara"));
console.log(ehPalindromo("javascript"));