var user;
var computer;

while (true) {

    user = parseInt(prompt("Faça uma escolha"));
    computer = Math.floor(Math.random() * 3 + 1);

    if ((user == computer) || (user == computer)) {
        alert("Empate.");
    } else if ((user == 1 && computer == 2) || (computer == 1 && user == 2)) {
        alert("Pedra quebra tesoura.")
    } else if ((user == 2 && computer == 3) || (computer == 2 && user == 3)) {
        alert("Tesoura corta papel.")
    } else if ((user == 3 && computer == 1) || (computer == 3 && user == 1)) {
        alert("Papel cobre a pedra.");
    }

    switch (user) {
        case 1:
            alert("O usuário escolheu pedra.");
            break;
        case 2:
            alert("O usuário escolheu tesoura.");
            break;
        case 3:
            alert("O usuário escolheu papel.");
            break;
    }

    switch (computer) {
        case 1:
            alert("O computador escolheu pedra.");
            break;
        case 2:
            alert("O computador escolheu tesoura.");
            break;
        case 3:
            alert("O computador escolheu papel.");
            break;
    }

    if (confirm("Deseja continuar?")) {
    } else {
        break;
    }
}