//3. Do...while – Sistema de Login//
let tentativas = 0;
let login;
let senha;
let acesso = false;

do {
    login = prompt("Digite o login:");
    senha = prompt("Digite a senha:");

    tentativas++;

    if (login === "admin" && senha === "1234") {
        acesso = true;
        console.log("Acesso liberado");
    } else {
        console.log("Login ou senha incorretos.");
    }

} while (!acesso && tentativas < 3);

if (!acesso) {
    console.log("Conta bloqueada");
}
