// Cálculo da Média Aritmética

// Notas do aluno
const nota1 = 7.5;
const nota2 = 9;
const nota3 = 6.5;

// Função para calcular a média
const calcularMedia = (notas) => {
  const somaNotas = notas.reduce((acc, nota) => acc + nota, 0);
  return somaNotas / notas.length;
};

// Calculando a média
const mediaAluno = calcularMedia([nota1, nota2, nota3]);

// Exibindo o resultado
console.log(`A média do aluno é: ${mediaAluno.toFixed(2)}`);
