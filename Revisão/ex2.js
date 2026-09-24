const entrada = require('readline-sync');

// let e variavel que sempre ira mudar de valor
let acumuladora = 0;

for(let i = 1; i <= 6; i++) {
    const valor = entrada.questionFloat(`Digite o valor da ${i}a peca: `);
    acumuladora += valor
}
media = acumuladora / 6;
console.log(`Total de defeitos: ${acumuladora.toFixed(2)}`);
console.log(`Média de defeitos: ${media.toFixed(2)}`);


