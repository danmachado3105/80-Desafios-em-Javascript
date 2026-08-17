// Desafio 63 - Rest operator em função

function somarTudo(...numeros) {
  let total = 0;

  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i];
  }

  return total;
}

console.log(somarTudo(1, 2, 3, 4, 5));