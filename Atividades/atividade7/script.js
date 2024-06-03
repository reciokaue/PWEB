function computerPlay() {
    const options = ['pedra', 'papel', 'tesoura'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

function play(playerSelection) {
    const computerSelection = computerPlay();
    const result = getResult(playerSelection, computerSelection);
    displayResult(result, playerSelection, computerSelection);
}

function getResult(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Empate!";
    } else if (
        (playerSelection === "pedra" && computerSelection === "tesoura") ||
        (playerSelection === "papel" && computerSelection === "pedra") ||
        (playerSelection === "tesoura" && computerSelection === "papel")
    ) {
        return "Você venceu!";
    } else {
        return "Você perdeu!";
    }
}

function displayResult(result, playerSelection, computerSelection) {
    const resultElement = document.getElementById('result');
    const userImage = document.getElementById('user-image');
    const robotImage = document.getElementById('robot-image');
    const header = document.getElementById('result-header');

    resultElement.textContent = result;
    header.style.display = 'flex';

    switch (playerSelection) {
        case 'pedra':
            userImage.src = 'rocks.png';
            break;
        case 'papel':
            userImage.src = 'paper.png';
            break;
        case 'tesoura':
            userImage.src = 'scissors.png';
            break;
    }

    switch (computerSelection) {
        case 'pedra':
            robotImage.src = 'rocks.png';
            break;
        case 'papel':
            robotImage.src = 'paper.png';
            break;
        case 'tesoura':
            robotImage.src = 'scissors.png';
            break;
    }
}
