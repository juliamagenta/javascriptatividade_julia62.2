//5. Break – Múltiplo de 7 Avançado//

for (let numero = 1; numero <= 100; numero++) {
    let primo = true;

    if (numero < 2) {
        primo = false;
    }

    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            primo = false;
            break;
        }
    }

    if (numero % 7 === 0 && primo) {
        console.log("Primeiro múltiplo de 7 que é primo: " + numero);
        break;
    }
}


