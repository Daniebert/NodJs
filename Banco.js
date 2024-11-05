// Verificador de Acesso ao Sistema Bancário

// Entrada de dados com as informações do usuário
const anoNasc = 2003;
const contaAtiva = "SIM"; // Pode ser "SIM" ou "NAO"
const restriCredito = "NAO"; // Pode ser "SIM" ou "NAO"
const manutencaoSistema = "NAO"; // Pode ser "SIM" ou "NAO"

// Cálculo da idade do usuário
const anoAtual = new Date().getFullYear();
const idade = anoAtual - anoNasc;

// Condicional para verificar acesso
if (manutencaoSistema.toUpperCase() === "SIM") {
    console.log("O sistema está em manutenção. Tente novamente mais tarde.");
} else if (idade >= 18 && contaAtiva.toUpperCase() === "SIM" && restriCredito.toUpperCase() === "NAO") {
    console.log("Acesso concedido.");
} else {
    // Mensagem específica caso o acesso seja negado
    if (idade < 18) {
        console.log("Acesso negado. Você precisa ter 18 anos ou mais.");
    } else if (contaAtiva.toUpperCase() !== "SIM") {
        console.log("Acesso negado. Sua conta não está ativa.");
    } else if (restriCredito.toUpperCase() === "SIM") {
        console.log("Acesso negado. Você tem restrição de crédito.");
    }
}

console.log("Agradecemos por utilizar nosso programa!");
