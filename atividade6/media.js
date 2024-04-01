function calcularMedia() {
    var nome = document.getElementById("nome").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, digite valores numéricos para as notas.");
        return;
    }

    var media = (nota1 + nota2 + nota3) / 3;
    var resultado = document.getElementById("resultado");
    resultado.innerText = "A média do aluno " + nome + " é: " + media.toFixed(2);
}
