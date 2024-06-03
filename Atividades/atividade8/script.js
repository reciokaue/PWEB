let respostas = [];

function adicionarResposta() {
    const idade = parseInt(document.getElementById('idade').value);
    const sexo = document.getElementById('sexo').value;
    const opiniao = parseInt(document.getElementById('opiniao').value);

    if(idade){
        respostas.push({ idade, sexo, opiniao });
        limparCampos();

        const peopleLabel = document.getElementById('people-label');
        peopleLabel.innerText = `Pessoas ${respostas.length}`
    }
}

function limparCampos() {
    document.getElementById('idade').value = '';
    document.getElementById('opiniao').selectedIndex = 0;
}

function mostrarResultados() {
    const totalPessoas = respostas.length;
    const somaIdades = respostas.reduce((acc, curr) => acc + curr.idade, 0);
    const mediaIdade = somaIdades / totalPessoas;
    const idades = respostas.map(resp => resp.idade);
    const pessoaMaisVelha = Math.max(...idades);
    const pessoaMaisNova = Math.min(...idades);
    const pessoasPessimo = respostas.filter(resp => resp.opiniao === 1).length;
    const percentagemOtimoBom = ((totalPessoas - pessoasPessimo) / totalPessoas) * 100;

    const mulheres = respostas.filter(resp => resp.sexo === 'feminino').length;
    const homens = totalPessoas - mulheres;

    const resultContainer = document.getElementById('result-container');
    const resultadosDiv = document.getElementById('resultados');

    resultContainer.style.visibility = 'visible'

    resultadosDiv.innerHTML = `
      <p>Média de Idade: ${mediaIdade.toFixed(2)}</p>
      <p>Idade da Pessoa Mais Velha: ${pessoaMaisVelha}</p>
      <p>Idade da Pessoa Mais Nova: ${pessoaMaisNova}</p>
      <p>Quantidade de Pessoas que Responderam Péssimo: ${pessoasPessimo}</p>
      <p>Porcentagem de Pessoas que Responderam Ótimo e Bom: ${percentagemOtimoBom.toFixed(2)}%</p>
      <p>Número de Mulheres: ${mulheres}</p>
      <p>Número de Homens: ${homens}</p>
    `;
}
