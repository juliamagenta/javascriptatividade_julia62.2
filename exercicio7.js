//7. While – Soma Acumulada com Condições//

let numero = 1;
let soma = 0;

while (numero <= 20) {
    if (numero % 2 === 0 && numero % 4 !== 0) {
        soma += numero;
    }

    numero++;
}

console.log("Resultado acumulado: " + soma);
