// Desafio 69 - Objeto com função construtora

function Livro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
}

const livro1 = new Livro("O Hobbit", "J.R.R. Tolkien");
const livro2 = new Livro("1984", "George Orwell");

console.log(livro1);
console.log(livro2);