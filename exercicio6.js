//6. Continue – Filtrando Ímpares//
for (let numero = 1; numero <= 50; numero++) {
    if (numero % 2 === 0) {
        continue;
    }

    if (numero % 3 === 0 || numero % 7 === 0) {
        continue;
    }

    console.log(numero);
}
