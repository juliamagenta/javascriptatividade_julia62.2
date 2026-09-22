//8. Do...while – Número Válido e Sequência//

let numero;

do {
    numero = Number(prompt("Digite um número maior que 0:"));
} while (numero <= 0 || isNaN(numero));

console.log("Números primos até " + numero + ":");

for (let i = 2; i <= numero; i++) {
    let primo = true;

    for (let divisor = 2; divisor < i; divisor++) {
        if (i % divisor === 0) {
            primo = false;
            break;
        }
    }

    if (primo) {
        console.log(i);
    }
}
