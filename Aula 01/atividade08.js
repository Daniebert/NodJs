// Cálculo de Juros Simples

// Função para calcular juros simples
const calcularJurosSimples = (valor, taxa, tempo) => valor * taxa * tempo;

// Valores de entrada
const valorBRL = 120;
const taxaAnual = 0.12;
const tempo = 4;

// Calculando os juros simples
const jurosSimples = calcularJurosSimples(valorBRL, taxaAnual, tempo);

// Exibindo o resultado
console.log(`O valor dos juros simples é: R$ ${jurosSimples.toFixed(2)}`);
