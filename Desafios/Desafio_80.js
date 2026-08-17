// Desafio 80 - Gerador de senha aleatória simples

function gerarSenha(tamanho) {
  const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let senha = "";

  for (let i = 0; i < tamanho; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[indiceAleatorio];
  }

  return senha;
}

console.log(gerarSenha(10));