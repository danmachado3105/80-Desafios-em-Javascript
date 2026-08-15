// Desafio 25 - Receber números até digitar 0

// Simulação de "digitação": lista de valores que o usuário teria digitado,
// na ordem, terminando em 0.
const entradasSimuladas = [5, 8, 3, 0];
let indice = 0;
let totalDigitados = 0;
let numeroDigitado;

do {
  numeroDigitado = entradasSimuladas[indice];
  indice++;

  if (numeroDigitado !== 0) {
    totalDigitados++;
    console.log(`Número digitado: ${numeroDigitado}`);
  }
} while (numeroDigitado !== 0);

console.log(`Total de números digitados (diferentes de zero): ${totalDigitados}`);