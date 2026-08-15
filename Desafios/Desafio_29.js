// Desafio 29 - Contar múltiplos de 3 entre 1 e 100

let totalMultiplos = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    totalMultiplos++;
  }
}

console.log(`Existem ${totalMultiplos} números divisíveis por 3 entre 1 e 100.`);