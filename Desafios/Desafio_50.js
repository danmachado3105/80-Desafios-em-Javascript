// Desafio 50 - Lista de tarefas

const tarefas = ["Estudar JS", "Lavar louça", "Fazer exercício", "Ler um livro"];
const concluidas = [true, false, false, true];

const tarefasPendentes = tarefas.filter((tarefa, indice) => !concluidas[indice]);

console.log("Tarefas pendentes:", tarefasPendentes);