function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}

const numero = prompt("Ingresa un número para calcular su factorial:");
const numeroParseado = parseInt(numero);

if (isNaN(numeroParseado)) {
    alert("Por favor, ingresa un número válido.");
} else {
    const factorial = calcularFactorial(numeroParseado);
    alert(`El factorial de ${numeroParseado} es ${factorial}`);
}