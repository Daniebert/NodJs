// Conversão de Moedas

// Função para converter Reais (BRL) para Dólares (USD)
const converterMoeda = (valorBRL, taxaCambio) => valorBRL / taxaCambio;

// Valores de entrada
const valorBRL = 550;
const taxaCambio = 5;

// Realizando a conversão
const valorUSD = converterMoeda(valorBRL, taxaCambio);

// Exibindo o resultado
console.log(`R$ ${valorBRL} reais equivale a $ ${valorUSD.toFixed(2)} USD.`);
