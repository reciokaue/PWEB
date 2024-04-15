
const maior = (array) => Math.max(...array);

const crescente = (array) => array.sort((a,b) => a-b);

const palindromo = (string) => string.split('').reverse().join('') === string;

const isTriangle = (a, b, c) => {
  if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
      return "Equilátero";
    } else if (a === b || a === c || b === c) {
      return "Isósceles";
    } else {
      return "Escaleno";
    }
  } else {
    return "Não é um triângulo";
  }
};

function testMaior() {
  const inputArray = document.getElementById("arrayInput").value;
  const array = inputArray.split(',').map(Number);

  const maiorResultado = maior(array);

  const resultElement = document.getElementById("result-maior");
  resultElement.textContent = `Maior número: ${maiorResultado}`;
}

function handleSort() {
    const inputArray = document.getElementById("arrayInput").value;
    const array = inputArray.split(',').map(Number);

    const arrayOrdenado = crescente(array);

    const resultElement = document.getElementById("result-maior");
    resultElement.textContent = arrayOrdenado
}

function testPalindromo() {
  const inputString = document.getElementById("stringInput").value;

  const palindromoResultado = palindromo(inputString);

  const resultElement = document.getElementById("result-palindromo");
  resultElement.textContent = `Palíndromo: ${palindromoResultado ? "Sim" : "Não"}`;
}

function testTriangulo() {
  const a = parseInt(document.getElementById("aInput").value);
  const b = parseInt(document.getElementById("bInput").value);
  const c = parseInt(document.getElementById("cInput").value);

  const isTriangleResultado = isTriangle(a, b, c);

  const resultElement = document.getElementById("result-tri");
  resultElement.textContent = `Triângulo: ${isTriangleResultado}`;
}
