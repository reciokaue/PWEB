function calcularOperacoes() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, digite valores numéricos.");
        return;
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "<strong>Resultados:</strong><br>" +
        "Soma: " + (numero1 + numero2) + "<br>" +
        "Subtração: " + (numero1 - numero2) + "<br>" +
        "Produto: " + (numero1 * numero2) + "<br>";

    if (numero2 !== 0) {
        resultado.innerHTML += "Divisão: " + (numero1 / numero2) + "<br>" +
            "Resto: " + (numero1 % numero2) + "<br>";
    } else {
        resultado.innerHTML += "Divisão: Não é possível dividir por zero.<br>";
    }
}
