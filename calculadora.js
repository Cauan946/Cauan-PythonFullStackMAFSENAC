let num1 = 10;
let num2 = 5;
let operacao = "-";

let resultado;

if (operacao === "+") {
    resultado = num1 + num2;
} else if (operacao === "-") {
    resultado = num1 - num2;
} else if (operacao === "*") {
    resultado = num1 * num2;
} else if (operacao === "/") {
    if (num2 !== 0) {
        resultado = num1 / num2;
    } else {
        resultado = "Erro: divisão por zero!";
    }
} else {
    resultado = "Operação inválida!";
}

console.log("resultado: ", resultado);