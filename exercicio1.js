//1. Switch – Dias da Semana Avançado//
let numero;

do {
    numero = Number(prompt("Digite um número de 1 a 7:"));
} while (numero < 1 || numero > 7 || isNaN(numero));

switch (numero) {
    case 1:
        console.log("Segunda-feira - Dia útil");
        break;
    case 2:
        console.log("Terça-feira - Dia útil");
        break;
    case 3:
        console.log("Quarta-feira - Dia útil");
        break;
    case 4:
        console.log("Quinta-feira - Dia útil");
        break;
    case 5:
        console.log("Sexta-feira - Dia útil");
        break;
    case 6:
        console.log("Sábado - Final de semana");
        break;
    case 7:
        console.log("Domingo - Final de semana");
        break;
}

