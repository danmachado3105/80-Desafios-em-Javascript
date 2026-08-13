// Desafio 09 - Constantes não podem ser alteradas

const PI = 3.14;

console.log(`PI vale ${PI}.`);

// Tentando alterar o valor de uma constante (isso gera erro)
try {
  PI = 3.15;
} catch (erro) {
  console.log("Erro ao tentar alterar PI:", erro.message);
}

// Explicação:
// Variáveis declaradas com "const" guardam uma referência fixa ao valor.
// Uma vez atribuído, esse valor não pode ser reatribuído — é exatamente
// esse comportamento que o JavaScript garante ao lançar o erro
// "Assignment to constant variable." quando tentamos mudar PI.