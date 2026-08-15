// Desafio 39 - Callback simples

function executarAcao(acao) {
  acao();
}

executarAcao(function () {
  console.log("Executando ação!");
});