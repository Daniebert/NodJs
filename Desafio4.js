// Sistema de Gestão de Biblioteca

class Livro {
    constructor(titulo, autor, anoPublicacao, disponivel = true) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.disponivel = disponivel;
    }

    // Método para emprestar o livro
    emprestar() {
        if (this.disponivel) {
            this.disponivel = false;
            console.log(`O livro "${this.titulo}" foi emprestado.`);
        } else {
            console.log(`O livro "${this.titulo}" não está disponível no momento.`);
        }
    }

    // Método para devolver o livro
    devolver() {
        if (!this.disponivel) {
            this.disponivel = true;
            console.log(`O livro "${this.titulo}" foi devolvido.`);
        } else {
            console.log(`O livro "${this.titulo}" já está disponível.`);
        }
    }

    // Método para exibir informações do livro
    exibirInformacoes() {
        console.log(`---- Informações do Livro ----`);
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Ano de Publicação: ${this.anoPublicacao}`);
        console.log(`Disponível: ${this.disponivel ? "Sim" : "Não"}`);
        console.log(`-----------------------------\n`);
    }
}

// Criando instâncias de livros
let livro1 = new Livro('Entendendo Algoritmos', 'Aditya Y. Bhargava', 2015, false);
let livro2 = new Livro('Pai Rico, Pai Pobre', 'Robert Kiyosaki', 1997, true);

// Exibindo informações dos livros
livro1.exibirInformacoes();
livro2.exibirInformacoes();

// Testando os métodos de emprestar e devolver
livro1.emprestar();
livro1.devolver();
livro1.devolver();
livro2.emprestar();
livro2.emprestar();
