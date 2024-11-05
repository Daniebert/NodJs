// Conversão de Unidades de Comprimento

// Função para converter metros para outras unidades
const converterComprimento = (metros) => {
  const centimetros = metros * 100;
  const milimetros = metros * 1000;
  return { centimetros, milimetros };
};

// Valor em metros
const metro = 2400;

// Realizando a conversão
const { centimetros, milimetros } = converterComprimento(metro);

// Exibindo o resultado
console.log(`${metro} metros equivalem a ${centimetros} centímetros.`);
console.log(`${metro} metros equivalem a ${milimetros} milímetros.`);
