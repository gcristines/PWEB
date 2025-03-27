var nome = "";
var nota = 0;
var media = 0;
var acc = 0;

nome = prompt("Qual é o seu nome?");

for (let x = 0; x <= 3; x++) {

    nota = parseFloat(prompt("Informe a nota " + parseInt(x+1)));
    acc = acc + nota;

}

media = acc / 4;

alert("A média de " + nome + " é: " + media.toFixed(2));

confirm("Legal!");