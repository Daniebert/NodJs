// Cálculo do IMC (Índice de Massa Corporal)

// Função para calcular o IMC
const calcularIMC = (peso, altura) => peso / (altura ** 2);

// Dados da pessoa
const peso = 55.7;  // em kg
const altura = 1.65; // em metros

// Calculando o IMC
const imcPessoa = calcularIMC(peso, altura);

// Exibindo o resultado
console.log(`O IMC dessa pessoa é: ${imcPessoa.toFixed(2)}`);
