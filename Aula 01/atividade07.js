// Conversão de Velocidade

// Função para converter km/h para m/s
const converterVelocidade = (kmh) => kmh / 3.6;

// Valor em km/h
const velocidadeKm = 180;

// Realizando a conversão
const velocidadeMs = converterVelocidade(velocidadeKm);

// Exibindo o resultado
console.log(`A velocidade de ${velocidadeKm} km/h é equivalente a ${velocidadeMs.toFixed(2)} m/s.`);
