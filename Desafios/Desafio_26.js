// Desafio 26 - Jogo do número secreto

const numeroSecreto = 7;

// Simulação das 3 tentativas do jogador
const tentativas = [4, 9, 7];

for (let i = 0; i < tentativas.length; i++) {
  const tentativaAtual = tentativas[i];

  if (tentativaAtual === numeroSecreto) {
    console.log(`Tentativa ${i + 1}: Acertou!`);
  } else {
    console.log(`Tentativa ${i + 1}: Tente novamente`);
  }
}