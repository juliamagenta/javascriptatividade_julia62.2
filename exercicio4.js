//4. For – Tabuada Filtrada//

let numero = Number(prompt("Digite um número de 1 a 10:"));
let soma = 0;

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;

    if (resultado % 4 === 0) {
        console.log(numero + " x " + i + " = " + resultado);
        soma += resultado;
    }
}

console.log("Soma dos resultados múltiplos de 4: " + soma);
