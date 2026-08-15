// Desafio 40 - Desafio do quiz

function fazerPergunta(pergunta, respostaCorreta) {
  console.log(pergunta);

  // Simulação da resposta do usuário
  const respostaDoUsuario = "Lisboa";

  if (respostaDoUsuario === respostaCorreta) {
    console.log("Resposta certa!");
  } else {
    console.log("Resposta errada!");
  }
}

fazerPergunta("Qual é a capital de Portugal?", "Lisboa");