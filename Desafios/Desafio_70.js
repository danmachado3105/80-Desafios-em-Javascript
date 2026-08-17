// Desafio 70 - Método no objeto

function Livro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;

  this.descrever = function () {
    return "O livro '" + this.titulo + "' foi escrito por " + this.autor + ".";
  };
}

const livro1 = new Livro("O Hobbit", "J.R.R. Tolkien");
const livro2 = new Livro("1984", "George Orwell");

console.log(livro1.descrever());
console.log(livro2.descrever());