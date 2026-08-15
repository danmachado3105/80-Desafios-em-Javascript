// Desafio 30 - Menu com repetição

// Simulação das opções escolhidas pelo usuário, em ordem, terminando em 3
const opcoesEscolhidas = [1, 2, 3];
let indice = 0;
let opcao;

do {
  console.log("1 - Ver saldo");
  console.log("2 - Fazer depósito");
  console.log("3 - Sair");

  opcao = opcoesEscolhidas[indice];
  indice++;

  if (opcao === 1) {
    console.log("Ação: exibindo saldo...");
  } else if (opcao === 2) {
    console.log("Ação: realizando depósito...");
  } else if (opcao === 3) {
    console.log("Ação: saindo do sistema...");
  }
} while (opcao !== 3);