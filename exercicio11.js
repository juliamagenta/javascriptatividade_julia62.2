//11. Exercício Integrado – Switch, For, Break e Análise//

let numero;

do {
    numero = Number(prompt("Digite um número de 1 a 7:"));
} while (numero < 1 || numero > 7 || isNaN(numero));

switch (numero) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
}

let soma = 0;

console.log("Números ímpares:");

for (let i = 1; i <= numero; i++) {
    if (i > 20) {
        break;
    }

    if (i % 2 !== 0) {
        console.log(i);
        soma += i;
    }
}

console.log("Soma dos números exibidos: " + soma);

// Verificação de número primo
let primo = true;

if (soma < 2) {
    primo = false;
} else {
    for (let divisor = 2; divisor < soma; divisor++) {
        if (soma % divisor === 0) {
            primo = false;
            break;
        }
    }
}

if (primo) {
    console.log("A soma é um número primo.");
} else {
    console.log("A soma não é um número primo.");
}
