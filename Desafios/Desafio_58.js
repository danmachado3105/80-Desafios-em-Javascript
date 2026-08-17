// Desafio 58 - Objeto com método

const usuario = {
  nome: "Pedro",
  saudacao: function () {
    console.log("Olá, " + usuario.nome + "! Que bom te ver por aqui.");
  },
};

usuario.saudacao();