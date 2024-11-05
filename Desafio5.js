const readline = require('readline');
const moment = require('moment');
require('moment/locale/pt-br'); // Importa o local para português

// Define o idioma como português
moment.locale('pt-br');

const interf = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(' ');
console.log('Bem-vindo ao nosso sistema de agendamento!');
console.log('Para agendar, iremos precisar de algumas informações...');
console.log(' ');
console.log('========================================================');
console.log(' ');

// Pergunta ao usuário pela data
interf.question('Informe uma data (DD/MM/YYYY): ', (data) => {
    // Formata a data de entrada
    const dataFormatada = moment(data, 'DD/MM/YYYY', true);

    if (dataFormatada.isValid()) {
        // Recupera o dia da semana
        const diaSemana = dataFormatada.format('dddd');
        
        // Calcula a diferença em dias
        const diasRestantes = dataFormatada.diff(moment(), 'days');
        
        // Calcula a data com 30 dias adicionados
        const dataMais30Dias = dataFormatada.clone().add(30, 'days').format('DD/MM/YYYY');

        console.log(' ');
        console.log(`Data escolhida: ${dataFormatada.format('DD/MM/YYYY')} - Dia da semana: ${diaSemana}`);
        console.log(' ');
        console.log(`Faltam ${diasRestantes} dias para essa data.`);
        console.log(`Data com mais 30 dias: ${dataMais30Dias}`);
    } else {
        // Caso a data seja inválida
        console.log('Data inválida. Por favor, insira uma data no formato DD/MM/YYYY.');
    }

    console.log(' ');
    console.log('Agradecemos por utilizar nossos serviços!');

    // Fecha a interface após a execução
    interf.close();
});
