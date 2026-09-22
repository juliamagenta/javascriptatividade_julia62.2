//2. While – Contagem Regressiva com Condições//

let numero = 30;

while (numero >= 1) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log(numero + " - PingPong");
    } else if (numero % 3 === 0) {
        console.log(numero + " - Ping");
    } else if (numero % 5 === 0) {
        console.log(numero + " - Pong");
    } else {
        console.log(numero);
    }

    numero--;
}
